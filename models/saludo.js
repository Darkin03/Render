import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const movies = require('../conversacion.json')

export class Saludo {
  static async getSaludo () {
    return movies
  }
}
