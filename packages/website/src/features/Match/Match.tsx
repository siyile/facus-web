import { ReactComponent } from '*.svg'
import React, { ReactElement } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { startMatch } from '../../api';
import MaterialUIPickers from './TimeDialog'
import DialogActions from '@material-ui/core/DialogActions';


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


const Match = (): ReactElement => {
  const classes = useStyles()

  const [goal, setGoal] = React.useState('')
  const [isMatching, setIsMatching] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');
  
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(selectedDate)
    setOpen(false);
  };

  function submit(): void {
    if (goal === '') {
      alert('Goal cannot be empty')
      return
    }
    if (isMatching) {
      setIsMatching(false)
      return
    }
    setIsMatching(true)
    // 2s delay for matching
    setTimeout(() => {
      startMatch(goal)
        .then((res) => {
          setIsMatching(false)
          console.log('success')
          console.log(res)
        })
        .catch((e) => {
          setIsMatching(false)
          console.log('error')
          console.log(e)
          alert(e.request.response)
        })
    }, 2000)
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
        setSelectedDate={setSelectedDate}/>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
