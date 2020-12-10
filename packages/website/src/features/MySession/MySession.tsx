import React, { ReactElement, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CurrentSessionCard from './CurrentSessionCard'
import UpcomingSessionCard from './UpcomingSessionCard'
import { getUserAndSession } from '../../api'
import Session from '../../Model/session'
import moment from 'moment'
import { yearToString } from '../../util/math'
import UserInfo from '../../Model/user'

const MySession = (): ReactElement => {
  const [currentSessions, setCurrentSessions] = useState<Session | null>(null)
  const [upcomingSessions, setUpComingSessions] = useState<Session[]>([])
  const [user, setUser] = useState<UserInfo | null>(null)

  //get user session data by cookie
  const fetchSessions = async () => {
    const [user, sessions] = await getUserAndSession()
    sessions.sort((a, b) => a.startTime - b.startTime)
    let c: Session | null = null
    const u: Session[] = []
    const now = moment().unix()
    sessions.forEach((s) => {
      const start = s.startTime
      const end = s.endTime
      if (!c && start <= now && now <= end) {
        c = s
      } else if (now <= start) {
        u.push(s)
      }
    })
    setCurrentSessions(c)
    setUpComingSessions(u)
    setUser(user)
  }

  const filterUser = (s: Session | null): UserInfo | null => {
    if (!user || !s) {
      return null
    }
    if (s.uid1 === user.id) {
      return s.user2
    } else if (s.uid2 === user.id) {
      return s.user1
    }
    return null
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  return (
    <Container>
      <Grid container direction={'column'} spacing={4}>
        <Grid item>
          <CurrentSessionCard
            session={currentSessions}
            user={filterUser(currentSessions)}
          />
        </Grid>
        <Grid container item spacing={2}>
          {upcomingSessions &&
            upcomingSessions.map((s) => {
              const user = filterUser(s)
              return (
                <Grid item xs={4} key={s.sid}>
                  <UpcomingSessionCard
                    name={user ? `${user.firstName} ${user.lastName}` : null}
                    time={s.startTime}
                    subject={user ? user.subject : 'Unknown'}
                    year={user ? yearToString(user.studyYear) : 'Unknown'}
                  />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MySession
