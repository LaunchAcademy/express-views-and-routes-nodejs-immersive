import express from "express"

const tasksRouter = new express.Router()

// tasksRouter.get("/example", (req, res) => {
//   // grab stuff from params if needed 

//   // perform business logic if needed

//   // render template 
// })

tasksRouter.get("/", (req, res) => {
  const someTasks = ["smell the flowers", "walk around", "dont think about....all of it...the world... everything"]

  res.render('index', { tasks: someTasks })
})

tasksRouter.get("/:taskName", (req, res) => {
  const task = req.params.taskName
  res.render("show", { task: task })
})


export default tasksRouter