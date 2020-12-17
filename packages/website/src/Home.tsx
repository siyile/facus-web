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
 /* Set rules to fill background */
//  min-height: 100%;
//  min-width: 1024px;
 
//  /* Set up proportionate scaling */
//  width: 100%;
//  height: auto;
 
//  /* Set up positioning */
//  position: fixed;
//  top: 0;
//  left: 0;
const useStyles = makeStyles((theme) => ({
  container: { 
    backgroundImage: `url('/background.jpg')`,
    display: 'block',
    flexDirection: 'row',
    minHeight: '100%',
    minWidth: '1024px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
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
