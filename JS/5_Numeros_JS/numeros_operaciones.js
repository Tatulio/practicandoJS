// Numeros

//Declaracion variables numericas
let alfa = 5
console.log(alfa)

let beta = 0.1
console.log(beta)

// Precision

let gamma = 0.2
console.log(beta+gamma)
// Truco para obtener el valor real
console.log(Math.round((beta + gamma) * 100)/100)


// Principales operaciones aritmeticas

let a = 3.5
let b = 4.8

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)

// Representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s = a.toString()

console.log(a_s)
console.log(typeof a_s)

// Redondeo de numeros decimales
let c = 3.3
let d = c * 3

console.log(d)
// . toFixed() -- Redondea el numero segun la cantidad de decimales que indiquemos
// Devuelve un String
console.log(d.toFixed(4))
console.log(d.toFixed(2))
console.log(d.toFixed(1))
console.log(typeof d.toFixed())

// .toPrecision(x) -- Muestra la cantidad de cifras que indiquemos
// Devuelve un String
let x = 1899.458457414
let y = 1899458457414
console.log(x.toPrecision(7))
console.log(y.toPrecision(7))

console.log(typeof y.toPrecision(7))