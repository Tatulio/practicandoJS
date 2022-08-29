let texto = "alberto"

let ahPero = ["cristina" , "nestor", "kirchner", "pj", "peron", "peronismo", "robo", "robar", "pbi", "lazaro", "maximo", "alberto", "campora", "cfk"]

const minus = (a) => {    
    return a.toLowerCase()
}

let textMinus = minus(texto)
console.log(minus(texto))

console.log(textMinus)

const ahperomacri = (texto, array) => {
    for (let i = 0; i < array.length; i++) {              
        if (texto.includes(array[i])) {
        return "Ah Pero Macri!"
    } else {
        return "Vamos Cristina!"
    }}
}

console.log(ahperomacri(textMinus, ...ahPero))


// const ahPeroMacri = (texto, array) => {
// console.log(typeof texto)
// console.log(typeof array)



//     for (let i = 0; i < array.length; i++) { 

// console.log(typeof array[i])       

//     if (texto.indexOf(array[i]) != -1) {
//         return "Ah Pero Macri!"
//     } else {
//         return "Viva Cristina!"
//     }        
// }
// }

// console.log(ahPeroMacri(textMinus, ahPero))


// let algodos = "ckf"


// const buscador = (a) => {
//     a.forEach
// }

// console.log(buscador(ahPero))

// ahPero.forEach(i => {
//     console.log(i)
// })


// console.log(ahPeroMacri(textMinus))

// console.log(texto.toLowerCase().includes())



