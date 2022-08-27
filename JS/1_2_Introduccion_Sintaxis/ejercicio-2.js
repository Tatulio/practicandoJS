const nombre = (a) => {
    return "Hola " + a + ", bienvenido!"
}

console.log(nombre("Martin"))

const edad = (a) => {
    if ( a <= 18 && a >= 0) {
        return "Eres muy joven"
    } else {
        return "Cual es tu CUIT?"
    }
}

console.log(edad(45))

const profesion = (a) => {
    if ( a == "desarrollador") {
        return "Eres un desarrolador"
    } else {
        return "Te interesa aprender?"
    }
}

console.log(profesion("Data Entry"))

const fecha_nac = new Date("february 9 1994")

const nacimiento = (a) => {
    return a 
}

console.log(nacimiento(fecha_nac))



const libro = (a) => {
    return a.titulo + " es un gran libro"
}

let libroFav = {
    titulo: "22/11/63",
    autor: "Stephen King",
    fecha: 2007,
    URL: 2598548168547,
}

console.log(libro(libroFav))