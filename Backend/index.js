require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || process.env.PUERTO

app.listen(port, () => {
    console.log("---------- GYM TONIC ----------")
    console.log(`http://localhost:${port}`)
})