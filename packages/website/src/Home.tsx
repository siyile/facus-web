import React, { ReactElement } from 'react'
import { Button, Typography } from '@material-ui/core'

function Home(): ReactElement {
  return (
    <>
      <Typography variant="h1">Hi, there</Typography>
      <Button variant="contained" color="primary">
        This is Material-UI
      </Button>
    </>
  )
}

export default Home
