import express from "express"

const tasksRouter = new express.Router()

class Task {
  constructor(name, dueDate){
    this.name = name 
    this.dueDate = dueDate
    this.completed = false
  }

  get completedStatus(){
    if (this.completed === true){
      return "finished"
    }
    return "not finished"
  }

  complete(){
    this.completed = true
  }
}

const tasks = [{name: "find more dogs", dueDate: "Friday"}, {name: "try not to think about the world", dueDate: "Now"}]

tasksRouter.get("/", (req, res) => {
  const taskObjects = tasks.map((task) => {
    return new Task(task.name, task.dueDate)
  })

  taskObjects[0].complete()

  res.render("index", { tasks: taskObjects })
})

export default tasksRouter;