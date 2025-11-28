const express = require('express')
const app = express()

let notes = [
  {
    id: "1",
    content: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: "2",
    content: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: "3",
    content: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: "4",
    content: "Mary Poppendieck",
    number: "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(notes)
})

app.get('/api/info',(request, response) => {
    const info = notes.length
    const today = new Date()
    const dayWord = today.getDay()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const wordDay = days[dayWord]
    const monthWord = months[month]
    const message = `Phonebook has info for ${info} people. 
                                                                             ${monthWord} ${wordDay} ${day} ${year} ${hours}:${minutes}:${seconds} GMT+0200 (Eastern European Standard Time)`
    response.end(message)
})

    app.get('/api/persons/:id',(request, response) => {
        const id = request.params.id
        const person = notes.find(person => person.id === id)
        if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }

    })

    app.delete('/api/persons/:id',(request, response) => {
        const id = request.params.id
        notes = notes.filter(note => note.id !== id)

        response.status(204).end()
    })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})