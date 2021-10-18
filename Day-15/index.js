require('dotenv').config() // add environment variables from .env file

const express = require("express")

const sequelize = require("./utills/database")
const page = require("./routes/products")

const PORT = process.env.PORT || 8000
const app = express()

app.use("/products", page)

sequelize.sync()
  .then((...a) => {
    return sequelize.authenticate()
  })
  .then((...a) => {
    app.listen(PORT, (...a) => {
      console.log(`listening to port: ${PORT}`)
    })
  })
  .catch(e => {
    sequelize.close()
    console.log(e)
  })
