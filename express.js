const express = require('express')
const fs = require('node:fs')
const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  fs.readFile('./dialogo.txt', 'utf-8', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.end('<h2>No se pudo encontrar los recurso correspondientes</h2>')
    } else {
      res.end(`<h2>${data}</h2>`)
    }
  })
})

app.post('/', (req, res) => {
  res.status(201).send('<h1>Recurso creado</h1>')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
