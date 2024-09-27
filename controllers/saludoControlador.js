import { Saludo } from '../models/saludo.js'

export class SaludoControlador {
  static async getSaludo (req, res) {
    const saludo = await Saludo.getSaludo()
    res.json(saludo)
  }
}
