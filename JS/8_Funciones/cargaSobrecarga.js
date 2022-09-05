// Carga y Sobre Carga de Funciones 

function saludar() {
    hola()
}

function hola() {
    console.log("Soy la Funcion Hola")
}

saludar()



// Funcion recursiva

function recursivo() {
    recursivo()
}

recursivo() // Eror de recursividad, se exediio el tamaño del stack