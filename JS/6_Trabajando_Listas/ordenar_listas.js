// .SORT() -- Ordenar Listas y Arrays

const array = [ 2, 3, 6, 9, 11, 7, 9, 1]

console.log(array)

array.sort((a, b) => {  // Le agregamos un callback - Tiene que retornar un valor numerico
    if ( a > b) {
        return -1   // Nos ordena el array
    } else if ( a < b){
        return +1
    } else { // a === b
        return 0
    }     
}) 

console.log(array)


// Ordenar unicamente arrays numericos
const arrayNumerico = [4, 1, 6, 3, 1, 3 ,51, 1, 245]

arrayNumerico.sort((a, b) => b - a) // b - a Ordena de mayor a menor | a - b ordena de menor a mayor

console.log(arrayNumerico)



const listaObjetos = [
    {nombre: "Vader", edad: 45},
    {nombre: "Palpatine", edad: 66},
    {nombre: "Obi Wan", edad: 60},
    {nombre: "Luke", edad: 19},
    {nombre: "Leia", edad: 19},
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)