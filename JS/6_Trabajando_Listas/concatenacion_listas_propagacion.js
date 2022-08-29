// Unir dos listas
// .CONCAT(lista2)

const lista1 = ["Hello", 2, true]
const lista2 = ["There", 3, false]

lista1.concat(lista2) // Esto no modifica la lista 1, solo muestra a las dos sin alterar el array original
console.log(lista1.concat(lista2))
console.log(lista1)
console.log(lista2)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Unir con factor de propagacion
console.log(...lista3)

const lista4 = [...lista1, ...lista2] // Un Array con todos los datos unidos
console.log(lista4)

// ERROR Mal entendido el concepto de Factor de Propagacion
const lista5 = [lista1, lista2] // Consigo un Array que tiene dentro dos Arrays, no se unieron realmente
console.log(lista5)