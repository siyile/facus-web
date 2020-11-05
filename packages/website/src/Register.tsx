import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  options: {
    marginTop: theme.spacing(8),
  },
  avatar: {
    width: '56px',
    height: '56px',
    margin: theme.spacing(10),
    backgroundColor: theme.palette.secondary.main,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 2),
  },
}))

function Register(): ReactElement {
  const classes = useStyles()
  const subjectOptions = [
    { value: 'cs', label: 'computer science' },
    { value: 'finance', label: 'finance' },
    { value: 'physics', label: 'physics' },
    { value: 'other', label: 'other' },
  ]

  const yearOptions = [
    { value: 'freshman', label: 'freshman' },
    { value: 'sophomore', label: 'sophomore' },
    { value: 'junior', label: 'junior' },
    { value: 'senior', label: 'senior' },
  ]

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [sub, setSub] = React.useState('')
  const [year, setYear] = React.useState('')
  const [email, setEmail] = React.useState('')

  function check(val: string, type: string): boolean {
    if (val === '') {
      alert('Plase input your ' + type)
      return false
    }
    return true
  }

  function checkAll(): boolean {
    return (
      check(firstName, 'first name') ||
      check(lastName, 'last name') ||
      check(email, 'email')
      // todo: whether check subject & school year.
      // check(sub, 'subject') ||
      // check(year, 'school year')
    )
  }

  function submit(): void {
    // todo: submit all states to server.
    if (!checkAll()) {
      return
    }
    console.log(
      'submit:firstName=' +
        firstName +
        '&lastName=' +
        lastName +
        '&subject=' +
        sub +
        '&year=' +
        year +
        '&email=' +
        email
    )
    openSign()
  }

  function openSign(): void {
    window.location.href = '/signin'
  }

  return (
    <>
      <div className={classes.paper}>
        <IconButton className={classes.options}>
          <Avatar
            // src="/images/example.jpg"
            style={{
              margin: '10px',
              width: '60px',
              height: '60px',
            }}
          ></Avatar>
        </IconButton>
        <div className={classes.inputRow}>
          <Grid container spacing={10} className={classes.options}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="firstName"
                label="First Name"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="firstName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="lastName"
              />
            </Grid>
          </Grid>

          <Grid container spacing={10} className={classes.options}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="email"
                label="Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Grid container spacing={10} className={classes.options}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-subject"
                select
                label="subject"
                value={sub}
                onChange={(e) => setSub(e.target.value)}
                helperText="Please select your subject"
              >
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-school-year"
                select
                label="school year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                helperText="Please select your school year"
              >
                {yearOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
            className={classes.options}
          >
            submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default Register
