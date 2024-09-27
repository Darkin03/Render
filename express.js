const express = require('express')
const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(201).send('<h1>Nuestra Api fue desplegada!!!</h1>')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
