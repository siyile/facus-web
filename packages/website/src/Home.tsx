import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Button, Container, Typography } from '@material-ui/core'
import { getProfile, fetchCounter } from './api'
import background from './img/background.jpg'
import { makeStyles } from '@material-ui/core/styles';
import classes from '*.module.css';
import { Height } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";


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
    backgroundImage: `url(${background})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    //   marginTop: theme.spacing(8)
  },
  content: {
    marginTop: '40vh',
  },
  words: {
    alignContent: 'center',
    alignItems: 'center',
  },
  btns: {
    margin: theme.spacing(4),
    height: theme.spacing(8),
    marginLeft: theme.spacing(8),
  },
}))

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);


function Header() {
  // Import result is the URL of your image
  return <img src={background} />;
}

const Home = (): ReactElement => {
  const [value, setValue] = useState('This is Material-UI')

  const classes = useStyles()


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const counterData = await fetchCounter()
  //     setValue(counterData)
  //   }
  //   fetchData()
  //     .then((r) => console.log('Fetched'+ r))
  //     .catch((e) => console.log('Failed'))
  // }, [])

  const signUp = () => {
    window.location.href = '/register'
  }

  const login = () => {
    window.location.href = '/signin'
  }

  return (
    <div className={classes.container}>
      <Typography variant="h1" color="primary">Focus Now</Typography>
      <Container className={classes.content}>

        <WhiteTextTypography variant="h2" color="textPrimary" align="center">
          Join Focus Now</WhiteTextTypography>
        <WhiteTextTypography variant="h2" color="initial" align="center">
          Work productively by working together</WhiteTextTypography>
      </Container>
      <Button className={classes.btns} onClick={signUp}>
        Sign up
      </Button>

      <Button className={classes.btns} variant="contained" color="primary" onClick={login}>
        Log in
      </Button>
    </div>
  )
}

export default Home
