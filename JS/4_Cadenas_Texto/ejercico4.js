let nombre = "Martin"
let apellido = "Vidal Freyre"

let estudiante = nombre + " " + apellido
console.log(estudiante)

let estudianteMayus = nombre + " " + apellido
console.log(estudianteMayus.toUpperCase())

let estudianteMinus = nombre + " " + apellido
console.log(estudianteMinus.toLowerCase())

let longitud = estudiante.length
console.log(longitud)

let primerLetra = nombre.charAt(0)
console.log(primerLetra)

let ultimaLetra = apellido.length -1
console.log(apellido[ultimaLetra])

let sinEspacion = estudiante.trim()
console.log(sinEspacion)

let incluye = estudiante.includes("Martin")
console.log(incluye)