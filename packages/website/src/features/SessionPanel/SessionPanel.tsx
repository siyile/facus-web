import React, { ReactElement } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SessionCard from './SessionCard'

const SessionPanel = (): ReactElement => {
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
