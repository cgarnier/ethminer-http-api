#!/usr/bin/env node
const app = require('express')()
const command = require('./command')
const port = process.env.PORT || 8888
app.get('/', (req, res) => {
  res.send(`
<pre>
Usage:
  GET /stats - Get the miner status
  POST /restart - restart the minerœ
</pre>
    `)
})

app.get('/stats', (req, res) => {
  command('miner_getstat1')
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.post('/restart', (req, res) => {
  command('miner_restart')
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.listen(port, _ => {
  console.log('Listening on ' + port)
})
