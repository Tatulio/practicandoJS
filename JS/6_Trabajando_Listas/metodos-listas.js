// Listas Arrays, Arreglos y Vectores
let array = [1 ,2 ,3 ,4 ,5 ,6 ]
let array2 = ["Pedro", "Pablo", "Paula", "Paola", ]
let array3 = [true, false, false, true, false, false]
let array4 = [1, true, "Hello", {nobre: "Peter", edad: 22}]
let array5 = [{nombre: "Jack", edad:7, isMale: true}, {nombre: "John", edad:10, isMale: true}, {nombre: "Kate", edad:12, isMale: false}]

console.log(array2[1])
console.log(array4[3])
console.log(array5[0])

// Metodos para introducir valoren en el Array
// .PUSH() -> Agrega al final del Array
array.push(7)
console.log(array)

array4.push("Mike",17,true)
console.log(array4[4])

array5.push({nombre: "Mike", edad:17, isMale: true})
console.log(array5[3])


// .UNSHIFT() -> Agrega al principio del Array
array.unshift(7)
console.log(array)

array4.unshift("Mike",17,true)
console.log(array4[0])

array5.unshift({nombre: "Mike", edad:17, isMale: true})
console.log(array5[0])


// Metodos para Eliminar Valores del Array
let array6 = [1, 2, 3, 14]
let array7 = ["Tarkin", "Vader", "Palpatine"]
let array8 = [{nombre: "Luke", edad:19, isMale: true}, {nombre: "Leia", edad:19, isMale: false}]

// .POP() -> Elimina el valor al final
array7.pop()
console.log(array7)


// SHIFT() -> Elimina el valor al inicio
array8.shift()
console.log(array8)


// Metodo para Eliminar, Modificar o Añadir Valores en el Array
// .SPLICE(x,y,z)
const array0 = [1, 2, 3, 4, 5, 6, 7]

// Eliminar Valores
array0.splice(2,3) // A partir del indice que indiquemos (x), elimina la cantidad que indiquemos en el segundo (y)
console.log(array0)

// Añadir Valores
array0.splice(2,0, "Hola") // A partir del indice que indiquemos (x), elimina la cantidad que indiquemos en el segundo (y), y añade lo que indiquemos (z)
console.log(array0)

// Modificar Valores
array0.splice(2,1, 3) // Se elimina el "hola" y se lo reemplaza por lo indicado, si agregamos mas numeros, los incluye desde el indice indicado (x)
console.log(array0)