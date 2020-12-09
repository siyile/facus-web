import { ReactComponent } from '*.svg'
import React, { ReactElement } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { startMatch, getSessionById, startSession } from '../../api';
import MaterialUIPickers from './TimeDialog'
import DialogActions from '@material-ui/core/DialogActions';
import AlertDialog from "../../util/AlertDialog"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //   marginTop: theme.spacing(8)
  },
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(8)
  },
  items: {
    marginTop: theme.spacing(8),
  },
  btns: {
    marginLeft: theme.spacing(8),
  },
  dialog: {
    padding: theme.spacing(4),
  },
  proot: {
    marginTop: theme.spacing(8),
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
const Progress = (): ReactElement => {
  return (
    <>
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress />
      <LinearProgress color="secondary" />
    </>
  )
}

export interface matchInfo {
  operation: string,
  tag: string,
  startTime: number
}


const Match = (): ReactElement => {
  const classes = useStyles()

  const [goal, setGoal] = React.useState('')
  const [isMatching, setIsMatching] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState<Date>(
    new Date(),
  );


  const handleClickOpen = () => {
    setSelectedDate(new Date())
    setOpen(true);
  };
  const handleClose = () => {
    // console.log(selectedDate)
    // console.log(selectedDate.getTime() / 1000)
    setOpen(false);
  };

  // Pick up a time
  function createSession(): void {
    let info: matchInfo = {
      operation: "create",
      tag: goal,
      startTime: selectedDate.getTime() / 1000
    }
    console.log(info)
    startSession(info)
      .then((res) => {
        console.log(res)
        if (res.status === "created") {
          handleClose()
          alert("Session created at" + new Date(res.startTime * 1000))
        }
      })
      .catch((e) => {
        console.log('error match')
        console.log(e)
        handleClose()
        alert(e.request.response)
      })
  }

  // Query session by sid
  // 1. If session status is matched, stop the matching process.
  // 2. If session status is created, recursively call
  function continueMatch(sid: string): void {
    // todo: bug, cannot cancel match
    // console.log("getSessionById, isMatching" + isMatching)
    // if(isMatching === false)
    //   return
    console.log("getSessionById" + sid)
    getSessionById(sid)
      .then((res) => {
        if (res.status === "matched") {
          setIsMatching(false)
          window.location.href = res.url
        } else {
          setTimeout(function () {
            continueMatch(sid);
          }, 1000)
        }
      })
      .catch((e) => {
        setIsMatching(false)
        console.log('error match')
        console.log(e)
        AlertDialog(e.request.response)
        // alert(e.request.response)
      })
  }

  // Start match process
  // 1. If session status is matched, stop the matching process.
  // 2. If session status is created, jump to continue matching process.
  function submit(): void {
    if (goal === '') {
      alert('Goal cannot be empty')
      return
    }
    console.log("submit, isMatching" + isMatching)
    if (isMatching) {
      setIsMatching(false)
      return
    }
    setIsMatching(true)
    startMatch(goal)
      .then((res) => {
        console.log('success')
        console.log(res)
        if (res.status === "matched") {
          setIsMatching(false)
          window.location.href = res.url
        } else {
          continueMatch(res.sid)
        }
      })
      .catch((e) => {
        setIsMatching(false)
        console.log('error submit')
        console.log(e)
        alert(e.request.response)
      })
  }
  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <Typography color="primary" variant="h3" className={classes.items}>
        What's your recent goal?
      </Typography>
      <TextField
        id="goal"
        className={classes.items}
        label="Goal"
        fullWidth
        multiline
        onChange={(e) => setGoal(e.target.value)}
        rows={4}
        helperText='Be specific, e.g. "Write a demo for my project"'
        defaultValue=""
        variant="outlined"
      />
      <Container className={classes.btn_container}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          className={classes.btns}
        >
          Pick Up A Time
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.btns}
          onClick={submit}
        >
          {isMatching ? 'End Matching' : 'Start Matching'}
        </Button>
      </Container>
      <Dialog className={classes.dialog} aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">Set a time for your session</DialogTitle>
        <MaterialUIPickers
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate} />
        <DialogActions>
          <Button onClick={createSession} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Container className={classes.proot}>
        {isMatching && <Progress />}
      </Container>
    </Container>
  )
}

export default Match
