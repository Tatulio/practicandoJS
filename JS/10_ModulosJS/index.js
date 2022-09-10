// Formas de Importar y Exportar Modulos
// 1- CommonJs - require
// 2- Import ES6 - import

const moduloMatematicas = require("./modulosCommonJs/matematicas")
console.log(moduloMatematicas)
// Otras formas de importar
// const suma = moduloMatematicas.suma
// const factorial = moduloMatematicas.factorial
// const eleva = moduloMatematicas.eleva
// const multiplica = moduloMatematicas.multiplica

// Otra forma con deconstruccion
//const { factorial, suma, eleva, multiplica } = moduloMatematicas
const { factorial, suma, eleva, multiplica } = require("./modulosCommonJs/matematicas")
// Ejecuta las funciones a partir de otro archivo

// const fact = moduloMatematicas.factorial(5)
// console.log(fact)

// const sum = moduloMatematicas.suma(12,90)
// console.log(sum)

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)