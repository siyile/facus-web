import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
})

const Bullet = (): ReactElement => {
  const classes = useStyles()
  return <span className={classes.bullet}>•</span>
}

export default Bullet
