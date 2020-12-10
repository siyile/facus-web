export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function yearToString(year: string) {
  switch (year) {
    case '2020':
      return 'Freshman'
    case '2019':
      return 'Sophomore'
    case '2018':
      return 'Junior'
    default:
      return 'Senior'
  }
}
