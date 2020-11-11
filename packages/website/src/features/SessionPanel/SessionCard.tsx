import React, { ReactElement, useState } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Bullet from '../../UtilComponents/Bullet'
import { getRandomInt } from '../../util/math'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
})

export type Props = {
  name: string
  time: Date
  year: string
  subject: string
  during: string
}

const SessionCard = (props: Props): ReactElement => {
  const classes = useStyles()

  const [rand] = useState(getRandomInt(100000000))
  const bull = <Bullet />

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant={'h5'} component={'h2'}>
            {props.name}
          </Typography>
          <Typography className={classes.pos} color={'textSecondary'}>
            {props.year} {bull} {props.subject}
          </Typography>
          <Typography variant={'body1'} component={'p'}>
            {moment().add(rand, 'seconds').format('MMM Do')} <Bullet />{' '}
            {props.during}
          </Typography>
          <Typography variant={'h2'} component={'p'}>
            {moment().add(rand, 'seconds').format('hh:mm A')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="medium" color={'primary'}>
            Join
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default SessionCard
