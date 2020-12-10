import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export interface Res {
  _links: {
    self: {
      href: string
    }
    users: {
      href: string
    }
  }
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url('/background.jpg')`,
    height: '100vh',
    display: 'block',
    flexDirection: 'row',
  },
  btns1: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    margin: theme.spacing(4),
    height: theme.spacing(8),
    marginRight: theme.spacing(20),
  },
  btns2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    margin: theme.spacing(4),
    height: theme.spacing(8),
    marginRight: theme.spacing(4),
  },
}))

const Home = (): ReactElement => {
  const classes = useStyles()

  const signUp = () => {
    window.location.href = '/register'
  }

  const login = () => {
    window.location.href = '/signin'
  }

  return (
    <>
      <div className={classes.container}>
        <Button className={classes.btns1} variant="contained" onClick={signUp}>
          Sign up
        </Button>
        <Button
          className={classes.btns2}
          variant="contained"
          color="primary"
          onClick={login}
        >
          Log in
        </Button>
      </div>
    </>
  )
}

export default Home
