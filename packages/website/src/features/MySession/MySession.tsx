import React, { ReactElement } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CurrentSessionCardView from './CurrentSessionCardView'
import UpcomingSessionCard from './UpcomingSessionCard'

const MySession = (): ReactElement => {
  return (
    <Container>
      <Grid container direction={'column'} spacing={4}>
        <Grid item>
          <CurrentSessionCardView />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <UpcomingSessionCard
              name={'Ada Wang'}
              time={new Date()}
              subject={'Chemistry'}
              year={'Freshman'}
            />
          </Grid>
          <Grid item xs={4}>
            <UpcomingSessionCard
              name={''}
              time={new Date()}
              subject={'Chemistry'}
              year={'Freshman'}
            />
          </Grid>
          <Grid item xs={4}>
            <UpcomingSessionCard
              name={'Ada Wang'}
              time={new Date()}
              subject={'Chemistry'}
              year={'Freshman'}
            />
          </Grid>
          <Grid item xs={4}>
            <UpcomingSessionCard
              name={'Ada Wang'}
              time={new Date()}
              subject={'Chemistry'}
              year={'Freshman'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MySession
