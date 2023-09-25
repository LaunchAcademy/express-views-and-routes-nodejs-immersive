import express from "express"

const rootRouter = new express.Router()
import tasksRouter from "./tasksRouter.js"

// localhost:3000

// rootRouter.use("/cats", catsRouter)
rootRouter.use("/tasks", tasksRouter)

rootRouter.get("/", (req, res) => {
  res.send("the true root route")
})

export default rootRouter
