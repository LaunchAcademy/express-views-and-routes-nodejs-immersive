import express from "express"
import path from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import expressSession from "express-session"
import flash from "flash"
import hbsMiddleware from "express-handlebars"
import { fileURLToPath } from "url"

import rootRouter from "./routes/rootRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(
  expressSession({
    secret: "Launch Academy",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

app.use(flash())

// flush session
app.use((req, res, next) => {
  if (req.session && req.session.flash && req.session.flash.length > 0) {
    req.session.flash = []
  }
  next()
})

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(rootRouter)

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

export default app
