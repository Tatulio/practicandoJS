// Comparar listas
// .EVERY()

const array = [3, 5, 6, 1, 54,-7 ,2 ,7, ,1 ,89,-32 ,12]

// const resultado = array.every( valor => {
//     if ( valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })

const resultado = array.every( valor => valor > 0)

console.log(resultado)

// Comparacion de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
const ar3 = [1, 2, 3, 5]

console.log(ar1 === ar2) // Por que dice false?
// Las listas no se comparan de esta manera

const compararArrays = (array_1, array_2)  => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2)) // Ahora si las compara
console.log(compararArrays(ar1, ar3)) 