import express from "express"

const tasksRouter = new express.Router()

// tasksRouter.get("/example", (req, res) => {
//   // grab stuff from params if needed

//   // perform business logic if needed

//   // send a response
// })

tasksRouter.get("/", (req, res) => {
  const someTasks = [
    "smell the flowers",
    "walk around",
    "dont think about....all of it...the world... everything"
  ]

  let responseString = "<h1>TODO list</h1><br/>"

  someTasks.forEach((task) => {
    responseString += `<li>${task}</li>`
  })

  res.send(responseString)
})

tasksRouter.get("/:taskName", (req, res) => {
  const task = req.params.taskName
  res.send(`<h1>Is this your task: ${task} ?</h1>`)
})

export default tasksRouter
