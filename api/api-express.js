// api.js (Express setup)
import express from "express"
import bodyParser from "body-parser"

const api = express()
const port = 3000

let notes = [
  {
    id: 1,
    title: "Meeting with Bob",
    description: "Discuss project timelines and deliverables for the new website.",
    label: "Work"
  },
  {
    id: 2,
    title: "Grocery Shopping",
    description: "Buy milk, eggs, bread, and veggies for the week.",
    label: "Personal"
  },
  {
    id: 3,
    title: "Plan Birthday Party",
    description: "Send out invitations and book a venue for the birthday party.",
    label: "Social"
  },
  {
    id: 4,
    title: "Important Task: Submit Report",
    description: "Complete and submit the quarterly financial report by the end of the week.",
    label: "Important"
  },
  {
    id: 5,
    title: "Workout Routine",
    description: "Go for a run in the morning and hit the gym in the evening.",
    label: "Personal"
  }
]

api.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

api.use(bodyParser.json())

api.get("/api/notes", (req, res) => {
  res.json(notes)
})

api.post("/api/notes", (req, res) => {
  const newNote = req.body
  newNote.id = notes.length + 1
  notes.unshift(newNote)
  res.status(201).json(newNote)
})

api.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params
  notes = notes.filter(note => note.id !== parseInt(id))
  res.status(204).end()
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
