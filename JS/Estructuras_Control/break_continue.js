// Break, continue 

let lista = [1,2,3,4,5,6,7,8]

for (let i = 0; i <lista.length; i++) {
    
    if (lista[i] === 3) { // Vuelve arriba al encontrar la condicion que busca, es como que saltea la condicion en el array
        continue 
    }
    var j = 50
    console.log(lista[i])

    if (lista[i] > 5) {
        break
    }
}


// Cual es el ambito de un bucle

console.log(i)
console.log(j)