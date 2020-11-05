import React, { ReactElement, useEffect, useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import { fetchCounter } from './api'

const Home = (): ReactElement => {
  const [value, setValue] = useState('This is Material-UI')

  useEffect(() => {
    const fetchData = async () => {
      const counterData = await fetchCounter()
      setValue(counterData)
    }
    fetchData()
      .then((r) => console.log('Fetched'))
      .catch((e) => console.log('Failed'))
  }, [])

  return (
    <>
      <Typography variant="h1">Hi, there</Typography>
      <Button variant="contained" color="primary">
        {value}
      </Button>
    </>
  )
}

export default Home
