import express from "express"

// all routes starting with "/tasks" come to this router (rootRouter!)
const tasksRouter = new express.Router()

// tasksRouter.get("/example", (req, res) => {
//   // grab stuff from params if needed

//   // perform business logic if needed

//   // render template
// })

// "/tasks"
tasksRouter.get("/", (req, res) => {
  const someTasks = [
    "smell the flowers",
    "walk",
    "dont think about....all of it...the world... everything",
    "pet the cat"
  ]

  // view file, any data
  res.render("index", { tasks: someTasks })
  // res.render("index", { tasks: someTasks, message: "hello!" })
  // res.render("tasks/index", { tasks: someTasks })
})

// "/tasks/walk"
tasksRouter.get("/:taskName", (req, res) => {
  // console.log(req)
  console.log("params", req.params)
  const task = req.params.taskName
  // res.render("show", { forTheTemplate: task })
  const myTaskObject = {
    name: task,
    due: "tomorrow"
  }
  res.render("show", { forTheTemplate: myTaskObject })
})

export default tasksRouter
