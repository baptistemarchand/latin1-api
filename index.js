const express = require('express')
const app = express()
const port = 4242

app.get('/', (req, res) => {
  res.set('Content-Type', 'application-json')
  const json = {lol: "Médecine"}
  res.send(Buffer.from(JSON.stringify(json), 'latin1'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
