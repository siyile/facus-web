import React, { ReactElement } from 'react'
import { Button, Typography } from '@material-ui/core'
import SignIn from './SignIn'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button_sign_in: {
    marginTop: theme.spacing(20),
    display: 'flex', 
    justifyContent: 'center'
  },
}));

function Home(): ReactElement {
  const styles = useStyles()
  return (
    <>
      <div className={styles.paper}>
        <SignIn/>
        <Typography variant="h1">Hi,11 there</Typography>
        <Button className={styles.button_sign_in} variant="contained" color="primary" onClick={openSign}>
          This is Material-UI
        </Button>
      </div>
    </>
  )
}

function openSign(): void {
  window.location.href = '/signin';
}

export default Home
