// Metodos Avanzados
// .MAP() .FILTER() .REDUCE()

const array = ["Madrid", "Londres", "Paris", "Roma", "Berlin"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})

console.log(val)

// .MAP()
// const newArray = array.map((valor, indice) => {
//     return `${indice + 1} - ${valor}`
// })

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)

console.log(newArray)


// .FILTER()
const listaObjetos = [
    {nombre: "Vader", edad: 45},
    {nombre: "Palpatine", edad: 66},
    {nombre: "Obi Wan", edad: 60},
    {nombre: "Luke", edad: 19},
    {nombre: "Leia", edad: 19},
]

const personasMayores = listaObjetos.filter(obj => {// Los valores que queremos que nos pase
    if (obj.edad >30) {
        return true
    } else {
        return false
    }
})

console.log(personasMayores) // Elimino a las personas que no cumplian la condicion

const personasMayores2 = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores2)


const nuevalista = listaObjetos.filter( obj => obj.nombre != "Luke")
console.log(nuevalista)


// .REDUCE()
// Obtener algo a partir de una lista

const suma1 = listaObjetos.reduce( (agr, cur) => agr + cur.edad) // Agr Valor agregado acumulativo que varia a medida que se ejecuta
                                                                // Cur es cada objeto en la lista de objeto

const valores = [3, 54, 62, 14, 19, 92 ]

const suma = valores.reduce((acumulado, cur, i ,arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma) // Nos devuelve el valor acumulado al final del array