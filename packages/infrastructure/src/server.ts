import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const target = path.join(__dirname, '..', '..', 'website', 'build')

app.use(express.static(path.join(target)))

app.get('/*', (req, res) => {
  res.sendFile(path.join(target, 'index.html'))
})

app.listen(port, () => {
  return console.debug(`server is listening on ${port}`)
})
