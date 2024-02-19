const express = require("express")
const app = express()

require("dotenv").config()
require("./db")

const port = process.env.PORT || 3000

const ImgRouter = require("./routes/Img")

app.use('/img', ImgRouter)

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`)
});