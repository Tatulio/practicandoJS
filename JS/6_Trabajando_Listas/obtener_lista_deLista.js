// Obtener una lista a partir de otra una lista
// .SLICE()
const array = ["Hola", 1, 2, 3, true, null, "There"]

// No modifica el valor original del Array
console.log(array.slice()) // Si no le indicamos, obtiene todo el valor
console.log(array.slice(4)) // Si indicamos un solo indice, obtiene de ahi hasta el final
console.log(array.slice(2,6)) // Si indicamos desde donde hasta que punto toma el valor

const array3 = array.slice(2,-1) // El numero negativo indica hasta donde detenerse partiendo desde el final del array
console.log(array3) //