// Trabajando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El Metodo", "El Codigo"],
    "4-juegos": [1, 2, 3, 4],
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "Leon" 
console.log(obj.nombre) // Cambia tambie el nombre del Objeto original 
console.log(obj2.nombre) // Con numeros y variables no pasa, cuando defino un objeto a paritr de otro no copia el valor, los enlaza

let val1 = 4
let val2 = val1
val2 = 10
console.log(val1)
console.log(val2) // En este caso, no se modifica el valor de val1, solo afecta a los Objetos Literales

const obj3 = {...obj}
console.log(obj.nombre) 
console.log(obj3.nombre)

obj3.nombre = "Richard"

console.log(obj.nombre) 
console.log(obj3.nombre) // const obj3 = {...obj} Al declararse asi, no se modifica el Obj original


//----------------------------------------------------------------
// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Titanic",anno:1939,},
    {titulo: "La Amenaza Fantasma",anno:1997,},
    {titulo: "Argo",anno:2016,},
    {titulo: "Los Increibles",anno:2004,},
    {titulo: "TED",anno:2012,}
]

console.log(listaPeliculas)

// .SORT() Cambia el valor del objeto original

listaPeliculas.sort((a,b) => a.anno - b.anno) // Ordena por año

console.log(listaPeliculas)