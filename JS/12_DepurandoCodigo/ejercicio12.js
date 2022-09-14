// DEPURACION DE CODIGO

const persona = {
    nombre: "Peter", 
    edad: 22
}


function obtenDobleEdad(edad) { 
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(persona.edad)
console.log(dobleEdad)




function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i ++) {        
        const numero = persona.edad + 1 
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)



const fib = (numero) => {
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (var i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}


console.log(fib(6));







