// <============ CONSTANTES Y DEPENDENCIAS ============>
require("dotenv").config() // npm i dotenv
const methodOverride = require("method-override") // npm i method-override
const express = require("express") // npm i express
const app = express()
const port = process.env.PORT || process.env.PUERTO
const errorHandlerMW = require("./middlewares/errorHandler.mw")

// <============ CONFIGURACIÓN SERVIDOR ============>
app.use(express.urlencoded({extended: true})) // Leer Datos req.body
app.use(express.json()) // Leer Datos JSON en req.body
app.use(methodOverride("_method")) // Para Poder hacer Patch y Delete
app.use(express.static(path.join(__dirname, "public"))) // Asignamos la carpeta "public" como la carpeta de contenido estático (imágenes, css, etc.)

// <============ MANEJADOR DE ERRORES ============>
app.use(errorHandlerMW.errorHandler)

// <============ LEVANTAR SERVIDOR ============>
app.listen(port, () => {
    console.log("---------- GYM TONIC ----------")
    console.log(`http://localhost:${port}`)
})