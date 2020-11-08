import React, { ReactElement, useState } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
})

export type Props = {
  name: string
  time: Date
  year: string
  subject: string
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}

const UpcomingSessionCardView = (props: Props): ReactElement => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  const [rand] = useState(getRandomInt(100000))

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
            {moment().add(rand, 'seconds').format('MMM Do')}
          </Typography>
          <Typography variant={'h2'} component={'p'}>
            {moment().add(rand, 'seconds').format('hh:mm A')}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default UpcomingSessionCardView
