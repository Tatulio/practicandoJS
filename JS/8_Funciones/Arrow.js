// Arrow Functions

const array = [1, 5, 6, 7, 2, 8, 10]

const array2 = array.map((valor) => valor + 2) // Le suma 2 a cada uno de los numeros dentro del array, por el .map()

console.log(array2)


function doble(valor) { 
    return valor * 2
}

const dobleValor = valor => valor * 2


console.log(dobleValor(array))
console.log(doble(6))