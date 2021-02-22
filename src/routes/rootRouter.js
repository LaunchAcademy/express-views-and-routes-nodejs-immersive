import express from "express"

const rootRouter = new express.Router()
// import tasksRouter from "./tasksRouter.js"

// rootRouter.use("/tasks", tasksRouter)

rootRouter.get('/', (req, res) => {
  res.send("the true root route")
})


export default rootRouter