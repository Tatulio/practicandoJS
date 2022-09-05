// Funciones y como declararlas

const saludo = "Hello There"


function saludar(saludos) {
    console.log(`${saludos}, General Kenobi`)
}

saludar(saludo)

//----------------------------------------------------------------
let despido = "Bye bye Ms American Pie"


function despedir(despido) {
    despido = "buen viaje"
    console.log(`Che, ${despido}, General`)
}

despedir(despido)


//----------------------------------------------------------------

let persona = { nombre: "Jack", apellido: "Harper"}

function saludarPesona(objeto) {
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPesona(persona)


function saludarPesona(objeto) {
    objeto.nombre = "Mike" // Cuidado que cambia el nombre del objeto
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPesona(persona)

console.log(persona) // El nombre del objeto cambio



//---------------------PARAMETROS OPCIONALES / POR DEFECTO-------------------------------------------

function imprimirNumero(numero = 7) { // Parametros opcionales/por defecto, si no lep aso numero, giual da el parametro que le indique
    console.log(numero)
}

imprimirNumero()

//----------------------------------------------------------------

function imprimir(...parametro) { // Permite mostrar todos los valores que indicamos
    console.log(parametro)
}

imprimir(2, 3, 4, 5, "hola", {nombre:"Jack"})

function imprimir(...parametro) { // Devuelve los valores como un string
    console.log(parametro)
}

imprimir(2, 3, 4, 5, "hola", {nombre:"Jack"})

// -------------------------------
let variable = "Hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variableInterna = "Adios"
    return a* b
}

// console.log(variableInterna) // No puedo porque esta definida en el ambito de esa funcion
console.log(multiplicar(10,15))