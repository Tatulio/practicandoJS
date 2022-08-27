// Listas, Array o Arreglo
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3)

lista3[0] = "Soy el primer elemento"
const lista4 = [lista, lista2, lista3]

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)

// Objetos
const celular = {
    altura:10,
    ancho:5,
    marca:"Apple",
    isWhite: true,
    contactos: ["Juan", "Carlos", "Peter"],
    tarjeta: {
        marca: "Kingstone",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}
celular.anio = 2019
celular.marca = "Samsung"

console.log(celular.tarjeta.marca)

console.log(celular)


// Librerias de apoyo Momment.js
const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10) // Se puede definir utilizando los milisegundos
console.log(fecha_milis)

const fecha_caena = new Date("march 25 2020")
console.log(fecha_caena)

const fecha_valores = new Date(2022, 2 ,15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1 // Porque sino empeiza desde 0
const anio = ahora.getFullYear()

console.log(dia, mes, anio)