// Etiquetas Bucle
// Break y continue
// labels

//No son las mejores practicas, pero te pueden salvar las papas

let unidades = 0
let decenas = 0

bucleDecenas : while (true) {
    bucleUnidades : while(true) {
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
        if (decenas == 2) {                 // Dentro de un mismo bucle podemos afectar a varias condiciones
            break bucleDecenas
        }
    }
    decenas++    
}

console.log("Termianos")