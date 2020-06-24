const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const Datastore = require('nedb-promise')

const db = new Datastore({ filename: './todos.db', autoload: true })

const app = express()
app.use(cors())
app.use(json())
const port = 8000

app.get('/todo', async (req, res) => {
  const todos = await db.find({})
  res.send(todos)
})

app.post('/todo', async (req, res) => {
  const saved = await db.insert(req.body)
  res.send(saved)
})

app.delete('/todo/:id/', async (req, res) => {
  await db.remove({ _id: req.params.id })
  res.status(200).end()
})

app.post('/todo/:id/', async (req, res) => {
  await db.update({ _id: req.params.id }, req.body)
  res.status(200).end()
})

app.get('*', (req, res) => res.status(404).send('Not Found'))

app.listen(port, () => {
  db.find({}, console.log)
  console.log(`Example app listening at http://localhost:${port}`)
})
