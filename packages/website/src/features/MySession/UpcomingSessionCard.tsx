import React, { ReactElement, useState } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import { getRandomInt } from '../../util/math'
import Bullet from '../../UtilComponents/Bullet'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
})

export type Props = {
  name: string | null
  time: number
  year: string
  subject: string
}

const UpcomingSessionCard = (props: Props): ReactElement => {
  const classes = useStyles()
  const bull = <Bullet />

  return (
    <>
      <Card>
        <CardContent>
          <Typography color={'textSecondary'} gutterBottom>
            Upcoming Session
          </Typography>
          {props.name ? (
            <>
              <Typography variant={'h5'} component={'h2'}>
                {props.name}
              </Typography>
              <Typography className={classes.pos} color={'textSecondary'}>
                {props.year} {bull} {props.subject}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant={'h5'} component={'h2'}>
                Waiting...
              </Typography>
              <Typography className={classes.pos} color={'textSecondary'}>
                Unknown {bull} Unknown
              </Typography>
            </>
          )}
          <Typography variant={'body1'} component={'p'}>
            {moment(props.time * 1000).format('MMM Do')}
          </Typography>
          <Typography variant={'h2'} component={'p'}>
            {moment(props.time * 1000).format('hh:mm A')}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default UpcomingSessionCard
