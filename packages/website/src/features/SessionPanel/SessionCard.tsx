import React, { ReactElement, useCallback, useState } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Bullet from '../../UtilComponents/Bullet'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { joinSession } from '../../api'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
})

export type Props = {
  name: string
  time: number
  year: string
  subject: string
  during: number
  sid: string
}

const SessionCard = (props: Props): ReactElement => {
  const classes = useStyles()

  const [joined, setJoin] = useState(false)

  const fetchJoin = useCallback(async () => {
    await joinSession(props.sid)
    setJoin(true)
  }, [props.sid])

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
            {moment(props.time).format('MMM Do')} <Bullet />{' '}
            {`${props.during} min`}
          </Typography>
          <Typography variant={'h2'} component={'p'}>
            {moment(props.time).format('hh:mm A')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            color={'primary'}
            disabled={joined}
            onClick={fetchJoin}
          >
            {joined ? 'Joined' : 'Join'}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default SessionCard
