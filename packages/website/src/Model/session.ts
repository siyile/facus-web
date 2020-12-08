interface Session {
  sid: string,
  url: string,
  tag: string,
  status: string,
  firstAttendant: string,
  secondAttendant: string,
  createdTime: number,
  matchedTime: number,
  startTime: number,
  endTime: number,
  Duration: number
}

export default Session
