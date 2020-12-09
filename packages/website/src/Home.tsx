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
    // opacity: '0.95',
    height: '100vh',
    display: 'block',
    flexDirection: 'row',
    // alignItems: 'center',
    //   marginTop: theme.spacing(8)
  },
  content: {
    paddingTop: '40vh'
    // marginTop: '40vh',
  },
  words: {
    alignContent: 'center',
    alignItems: 'center',
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

const WhiteTextTypography = withStyles({
  root: {
    color: "#4648aa",
    // opacity: '0.7'
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
      <Container className={classes.content}>
        {/* <Typography variant="h1" color="initial" align="center">
          Join Focus Now</Typography> */}
        <WhiteTextTypography variant="h1" color="textPrimary" align="center">
          Join Focus Now</WhiteTextTypography>
        <Typography variant="h3" color="initial" align="center">
        Focus Now helps you work productively together</Typography>
        {/* <WhiteTextTypography variant="h3" color="initial" align="center">
          </WhiteTextTypography> */}
      </Container>
      <Button className={classes.btns1}  variant="contained" onClick={signUp}>
        Sign up
      </Button>

      <Button className={classes.btns2} variant="contained" color="primary" onClick={login}>
        Log in
      </Button>
    </div>
  )
}

export default Home
