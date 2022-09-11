const persona = {
    nombre:"Martin",
    edad:28,
    isDeveloper:false,
    saludo: function() {
        console.log("Hello There")
    }
}

console.log(persona)
console.log(persona.saludo)


// Funcion Factory
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
    nombre,
    edad,
    isDeveloper,
    saludo: function() {
        console.log("Hello There")
    }
    }
}

const nueva_persona = crearPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2 = crearPersona("Maria", 41, false)
console.log(nueva_persona)