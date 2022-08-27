// Bucles for y while

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let lista = [1,3,6,8,2,4]

for (let i = 0; i< lista.length; i++) {
    console.log(lista[i])
}

// Estructura for of

for ( let valor of lista) {
    console.log(valor) 
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor)
})


// Estructura for....in

let persona = {
    nombre: "Peter", 
    apellido: "Pan", 
    edad: 1098, 
    isDeveloper: true
}

let prop = "edad"
console.log(persona.nombre)
console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}