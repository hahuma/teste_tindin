const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const { MONGO_URL, NODE_ENV, APP_URL } = require("./config/consts")

if (NODE_ENV !== "production") {
  require("dotenv").config()
}
const routes = require("./routes")


corsOptions = {
  origin: APP_URL || undefined
}

class App {

  constructor() {
    this.express = express()
    this_middlewares()
    this._database()
    this._routes()

  }

  _middlewares() {
    this.express.use(express.json())
    this.express.use(cors(corsOptions))
  }

  _database() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTypology: true
    })
  }

  _routes() {
    this.express.use(routes)
  }
}

module.exports = new App().express