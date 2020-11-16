import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { register } from '../../api'

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
  inputText: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  gridItem: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 2),
  },
}))

export interface UserInfo {
  firstName: string
  lastName: string
  email: string
  password: string
  subject: string
  studyYear: string
  country: string
}

const RegisterView = (): ReactElement => {
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
  const [subject, setSubject] = React.useState('')
  const [studyYear, setStudyYear] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password1, setPassword1] = React.useState('')
  const [password2, setPassword2] = React.useState('')
  const [country, setCountry] = React.useState('')

  function check(val: string, type: string): boolean {
    if (val === '') {
      alert('Please input your ' + type)
      return false
    }
    return true
  }

  const checkPassword = () => {
    if (password1 === '' || password2 === '') {
      alert('Plase input your password')
      return false
    }
    if (password1 !== password2) {
      alert("Passwords don't match ")
      return false
    }
    return true
  }

  function checkAll(): boolean {
    return (
      check(firstName, 'first name') &&
      check(lastName, 'last name') &&
      check(email, 'email') &&
      checkPassword()
      // todo: whether check subject & school year.
      // check(country, 'country') ||
      // check(sub, 'subject') ||
      // check(year, 'school year')
    )
  }

  function submit(): void {
    // todo: submit all states to server.
    if (!checkAll()) {
      return
    }
    let user: UserInfo = {
      firstName,
      lastName,
      email,
      password: password1,
      subject,
      studyYear: studyYear,
      country,
    }
    // console.log(user)
    register(user)
      .then((res) => {
        console.log(res)
        openSign()
      })
      .catch((e) => console.log(e))
    // openSign()
  }

  function openSign(): void {
    window.location.href = '/signin'
  }

  return (
    <>
      <Container className={classes.paper} component="main" maxWidth="xs">
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
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="firstName"
            />
          </Grid>

          <Grid item xs={6} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="lastName"
            />
          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </Grid>
          {/* <Grid item xs={6} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              margin="normal"
              required
              id="country"
              label="Your Country"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="country"
            />
          </Grid> */}

          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="password1"
              label="Create Password"
              name="password1"
              type="password"
              onChange={(e) => setPassword1(e.target.value)}
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              id="password2"
              label="Repeat Password"
              name="password2"
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              autoComplete="current-password"
            />
          </Grid>

          <Grid item xs={6} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              id="select-subject"
              select
              label="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              helperText="Please select your subject"
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <TextField
              className={classes.inputText}
              id="select-school-year"
              select
              label="school year"
              value={studyYear}
              onChange={(e) => setStudyYear(e.target.value)}
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
          variant="contained"
          color="primary"
          onClick={submit}
          className={classes.options}
        >
          submit
        </Button>
      </Container>
    </>
  )
}

export default RegisterView
