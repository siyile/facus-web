import UserInfo from './user'

interface Session {
  sid: string
  url: string
  tag: string
  status: string
  uid1: string
  uid2: string
  secondAttendant: string
  createdTime: number
  matchedTime: number
  startTime: number
  endTime: number
  duration: number
  user1: UserInfo
  user2: UserInfo | null
}

export default Session
