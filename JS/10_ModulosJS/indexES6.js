// import { suma, eleva } from "./modulos/matematicasES6"
import * as moduloMatematicas from "./modulosES6/matematicasES6"

import getAutor from "./modulosES6/literatura"

console.log(getAutor())

const sum = moduloMatematicas.suma(4,12)
console.log(sum)

const potencia = eleva(12,10)
console.log(potencia)

