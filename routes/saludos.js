import { Router } from 'express'
import { SaludoControlador } from '../controllers/saludoControlador.js'
export const router = Router()

router.get('/', SaludoControlador.getSaludo)
