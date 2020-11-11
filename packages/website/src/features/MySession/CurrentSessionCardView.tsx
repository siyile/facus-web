import React, { ReactElement } from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import Countdown from 'react-countdown'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Bullet from '../../UtilComponents/Bullet'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
})

const CurrentSessionCardView = (): ReactElement => {
  const classes = useStyles()
  const bull = <Bullet />

  return (
    <>
      <Card>
        <CardContent>
          <Typography color={'textSecondary'} gutterBottom>
            Current Session
          </Typography>
          <Typography variant={'h5'} component={'h2'}>
            Leon S. Kennedy
          </Typography>
          <Typography className={classes.pos} color={'textSecondary'}>
            Sophomore {bull} Computer Science
          </Typography>
          <Typography variant={'h1'} component={'p'}>
            <Countdown date={Date.now() + 1000 * 3600} daysInHours />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="medium" color={'primary'}>
            Start
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CurrentSessionCardView
