import React, { ReactElement, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SessionCard from './SessionCard'
import { getAllSession } from '../../api'
import Session from '../../Model/session'
import { yearToString } from '../../util/math'

const SessionPanel = (): ReactElement => {
  const [sessions, setSessions] = useState<Session[]>([])

  //get all session data
  const fetchSessions = async () => {
    const sessions = await getAllSession()
    setSessions(sessions)
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  return (
    <Container>
      <Grid container direction={'column'} spacing={4}>
        <Grid container item spacing={2}>
          {sessions &&
            sessions.map((s, idx) => {
              if (!s.uid2) {
                return (
                  <Grid item xs={4} key={idx}>
                    <SessionCard
                      name={`${s.user1.firstName} ${s.user1.lastName}`}
                      subject={s.user1.subject}
                      year={yearToString(s.user1.studyYear)}
                      time={s.startTime}
                      during={s.duration}
                      sid={s.sid}
                    />
                  </Grid>
                )
              } else {
                return null
              }
            })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default SessionPanel
