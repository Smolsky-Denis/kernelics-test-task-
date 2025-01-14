const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3001

const app = express()

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(bodyParser.json())
app.use(cors())

const employees = [
  {
    id: 1,
    name: 'John',
    status: 'Working',
    img: 'https://picsum.photos/id/1/200/300',
  },
  {
    id: 2,
    name: 'Jack',
    status: 'Working',
    img: 'https://picsum.photos/id/2/200/300',
  },
  {
    id: 3,
    name: 'Sheli',
    status: 'LunchTime',
    img: '',
  },
  {
    id: 4,
    name: 'Eitan',
    status: 'Working',
    img: 'https://picsum.photos/id/4/200/300',
  },
  {
    id: 5,
    name: 'Tom',
    status: 'OnVacation',
    img: 'https://picsum.photos/id/5/200/300',
  },
  {
    id: 6,
    name: 'Jerry',
    status: 'BusinessTrip',
    img: 'https://picsum.photos/id/6/200/300',
  },
]

app.get('/users', (req, res) => {
  res.send(employees)
})

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex(obj => obj.id === +req.params.id)
  employees[index].status = req.body.status

  res.send(employees)
})

app.post('/users', (req, res) => {
  const newEmployee = {
    ...req.body,
    id: employees.length + 1,
  }
  employees.push(newEmployee)

  res.send(employees)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
