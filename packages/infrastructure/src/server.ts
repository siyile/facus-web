import express from 'express'
import path from 'path'

const app = express()
const port = 3001

app.use(express.static(path.join(__dirname)))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  return console.debug(`server is listening on ${port}`)
})
