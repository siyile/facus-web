import React, { ReactElement, useCallback } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import Countdown from 'react-countdown'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Bullet from '../../UtilComponents/Bullet'
import Session from '../../Model/session'
import { yearToString } from '../../util/math'
import UserInfo from '../../Model/user'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
})

type Props = {
  session: Session | null
  user: UserInfo | null
}

const CurrentSessionCard = (props: Props): ReactElement => {
  const classes = useStyles()
  const bull = <Bullet />

  const { user, session } = props

  const onClick = useCallback((url: string) => {
    window.open(url)
  }, [])

  return (
    <>
      <Card>
        <CardContent>
          <Typography color={'textSecondary'} gutterBottom>
            Current Session
          </Typography>
          <Typography variant={'h5'} component={'h2'}>
            {user ? `${user.firstName} ${user.lastName}` : 'Waiting...'}
          </Typography>
          <Typography className={classes.pos} color={'textSecondary'}>
            {user ? yearToString(user.studyYear) : 'Unknown'} {bull}
            {user ? user.subject : 'Unknown'}
          </Typography>
          <Typography variant={'h1'} component={'p'}>
            <Countdown
              date={session ? session.endTime : Date.now()}
              daysInHours
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            color={'primary'}
            disabled={session == null}
            onClick={() => onClick(session ? session.url : '#')}
          >
            Start
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CurrentSessionCard
