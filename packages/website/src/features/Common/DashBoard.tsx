import CssBaseline from '@material-ui/core/CssBaseline'
import React, { ReactElement } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import MySession from '../MySession/MySession'

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

const DashBoard = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position={'absolute'} className={classes.appBar}>
        <Toolbar>
          <Typography component={'h1'} variant={'h6'} noWrap>
            MySessions
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
          {['Sessions', 'MySession'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MySession />
      </main>
    </div>
  )
}

export default DashBoard
