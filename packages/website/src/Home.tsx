import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import { getProfile, fetchCounter } from './api'



export interface Res {
  _links: {
    self: {
      href : string
    }
    users: {
      href: string
    }
  }
}

const Home = (): ReactElement => {
  const [value, setValue] = useState('This is Material-UI')

  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const counterData = await fetchCounter()
  //     setValue(counterData)
  //   }
  //   fetchData()
  //     .then((r) => console.log('Fetched'+ r))
  //     .catch((e) => console.log('Failed'))
  // }, [])

  const submit = () => {
    getProfile()
      .then((r) => console.log(r._links.users.href))
      .catch((e) => console.log('Failed'))
  }

  return (
    <>
      <Typography variant="h1">Hi, there</Typography>
      <Button variant="contained" color="primary" onClick={submit}>
        {value}
      </Button>
    </>
  )
}

export default Home
