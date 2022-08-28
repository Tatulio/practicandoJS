// Operador .valueOf() - Obtener valures numericos a paritr de objtos literales
let a = 2
let b = new Number(3)

console.log(a)
console.log(b)
console.log(a + b)
console.log(a.valueOf() + b.valueOf())

console.log(b.valueOf())

let str = new String("Hello There")
console.log(str)
console.log(str.valueOf())


// NaN - Infinity
let n = Number("adios")
console.log(n) // Lo que se le paso no es un numero
console.log(isNaN(n)) // Es verdadero de que no es un numero

let numerador = 19
let divisor = 0
let divisor2 = null

console.log(numerador / divisor) // No seria infinito, sino un indeterminador
console.log(numerador / divisor2)


// Como converitr strings a valores numericos con: Number, parseInt y parseFloat
let numero = "6.89"
let num2 = 17.2

console.log(typeof numero)
console.log(numero+ num2) // Quiero sumar un string con un numero 5.89 + 17.2 == 5.8917.2

// Number() convierte al String en un valor numerico
console.log(Number(numero) + num2)

// Lo convierte en un numero, pero sin decimales
console.log(parseInt(numero))
console.log(parseFloat(numero))


// Numeros Hexadecimales -- No existe la coma
let numHex = "0X3a5b7"
console.log(parseInt(numHex,16)) // (base 16)



// Obtener los valores maximo y minimo de JS
let min_presicion = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE

console.log(min_presicion)
console.log(min_valor_JS)
console.log(max_valor_JS)

console.log(1**1024) 