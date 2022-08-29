// Si algunos de los elementos del a lista cumplen
// .SOME()
const array = [3, 4, 7, ,1 ,5 ,3 ,7, -3,12 ,9]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor => valor === 4)
console.log(existe)


const listaObjetos = [
    {nombre: "Vader", edad: 45},
    {nombre: "Palpatine", edad: 66},
    {nombre: "Obi Wan", edad: 60},
    {nombre: "Luke", edad: 19},
    {nombre: "Leia", edad: 19},
]

const existeLuke = listaObjetos.some(persona => persona.nombre === "Luke")
console.log(existeLuke)

// Obtener una lista a partir de un objeto integrado
const str = "Hello There"
console.log(str[6])

const ar_str = Array.from(str) // Cada letra se "separo" como un item individual en el array
console.log(ar_str)

const set = new Set([2, 3, "hola", true])
const ar_set = Array.from(set)  // Pasar de un tipo de valor a otro
console.log(ar_set)


const keys = array.keys()  // Podemos acceder a las claver
console.log(keys)

const ar_keys = Array.from(keys) // Toma el Hello There convertido en intems individual y pasa el indice de cada uno
console.log(ar_keys)