import React, { ReactElement } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SessionCard from './SessionCard'
import {getAllSession} from '../../api'


const SessionPanel = (): ReactElement => {
  //get all session data
  const getData = ()=> {
    getAllSession().then((res)=> {
      console.log(res.length)
      console.log(res[0])
    }).catch((e) => {
      console.log('error')
      console.log(e)
      alert(e.request.response)
    })
  }


  return (
    <Container>
      <Grid container direction={'column'} spacing={4}>
        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <SessionCard
              name={'Claire Redfield'}
              subject={'Science'}
              year={'Senior'}
              time={new Date()}
              during={'1h'}
            />
          </Grid>
          <Grid item xs={4}>
            <SessionCard
              name={'Claire Redfield'}
              subject={'Science'}
              year={'Senior'}
              time={new Date()}
              during={'1h'}
            />
          </Grid>
          <Grid item xs={4}>
            <SessionCard
              name={'Claire Redfield'}
              subject={'Science'}
              year={'Senior'}
              time={new Date()}
              during={'1h'}
            />
          </Grid>
          <Grid item xs={4}>
            <SessionCard
              name={'Claire Redfield'}
              subject={'Science'}
              year={'Senior'}
              time={new Date()}
              during={'1h'}
            />
          </Grid>
          <Grid item xs={4}>
            <SessionCard
              name={'Claire Redfield'}
              subject={'Science'}
              year={'Senior'}
              time={new Date()}
              during={'1h'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SessionPanel
