// Funciones Generadoras

function* generarId() { // Cada vez que llamemos a esta funcion, se genere un Id incremental
    let id = 0
    while (true) {
        id++        
        if (id  === 7) {
            return id
        }
        yield id // nos envia un numero, es un return que no sale de la funcion y espera a ser llamado de nuevo
    }
}

const gen = generarId() // La guardamos en una constante

// Los objetos generator van generando los vaoles consecutivos hasta que se cumpla la condicion i === 7
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())