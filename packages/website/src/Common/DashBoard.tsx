import CssBaseline from '@material-ui/core/CssBaseline'
import React, { ReactElement } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AlarmOnIcon from '@material-ui/icons/AlarmOn'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import MySession from '../features/MySession/MySession'
import SessionPanel from '../features/SessionPanel/SessionPanel'
import Match from '../features/Match/Match'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

type Props = {
  content: string
}

const DashBoard = (props: Props): ReactElement => {
  const classes = useStyles()

  let content: ReactElement = <SessionPanel />
  let title: string = 'sessions'
  switch (props.content) {
    case 'sessions':
      content = <SessionPanel />
      title = 'Session Park'
      break
    case 'mysession':
      content = <MySession />
      title = 'My Session'
      break
    case 'match':
      content = <Match />
      title = 'Start Matching'
      break
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position={'absolute'} className={classes.appBar}>
        <Toolbar>
          <Typography component={'h1'} variant={'h6'} noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={'permanent'}
        classes={{ paper: classes.drawerPaper }}
        anchor={'left'}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[
            ['Start Matching', 'match'],
            ['Session Park', '/sessions'],
            ['My Session', 'mysession']
          ].map(([text, url], index) => (
            <ListItem button key={text} component={Link} to={url}>
              <ListItemIcon>
                {index === 0 ?  <AlarmOnIcon/> : index === 1 ? <MailIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {content}
      </main>
    </div>
  )
}

export default DashBoard
