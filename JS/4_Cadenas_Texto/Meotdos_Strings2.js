// Metodos String 2

let input = "escorpio"
let db = "Escorpio"

console.log(input === db)

// toLowerCase() o toUpperCase()
// Comparar ambas variables pero pasandolas por un filtro
console.log(db.toLowerCase())
console.log(db.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Formas de concatenar
let str_1 = "Primera Cadena Jeje"
let str_2 = "Segunda Cadena"

console.log(str_1 + " " + str_2)

console.log(str_1.concat(" ", str_2))

console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y final
let str_3 = "   Hello There, General Kenobi!   "
console.log(str_3.length)

// trim() elimina los espacios iniciales y finales
console.log(str_3.trim().length)
console.log(str_3.trimStart().length) //Solo los del inicio
console.log(str_3.trimEnd().length) // Solo los del final

//Obtener el caracter que se encuentra en cierta posicion

let str_4 = "Hola, soy un texto de relleno"

console.log(str_4.charAt(13))
console.log(str_4[13])


// Obtener una palabra dentro del string del

let str_5 = "Harry Potter era un niño huefano que vivia en la casa de sus odiosos tios, familia de la madre de Harry Potter"
console.log(str_5.indexOf("Potter"))
console.log(str_5.charAt(6))
console.log(str_5.lastIndexOf("Potter"))