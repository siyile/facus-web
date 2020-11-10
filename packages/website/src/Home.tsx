import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import { fetchCounter } from './api'



const Home = (): ReactElement => {
  const [value, setValue] = useState('This is Material-UI')


  const fetchData = async () => {
    const counterData = await fetchCounter()
    setValue(counterData)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const counterData = await fetchCounter()
  //     setValue(counterData)
  //   }
  //   fetchData()
  //     .then((r) => console.log('Fetched'+ r))
  //     .catch((e) => console.log('Failed'))
  // }, [])

  const submit = useCallback(()=> {
    fetchData()
  }, [])

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
