import express from 'express'
import { router } from './routes/saludos.js'
const app = express()
app.use('/', router)
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
