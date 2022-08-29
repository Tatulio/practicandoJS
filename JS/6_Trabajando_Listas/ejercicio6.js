let compras = ["Carne", "Coca", "Lechuga", "Tomate", "Pan"]

compras.push("Aceite de Girasol")

console.log(compras)

compras.pop()

console.log(compras)

const peliculas = [
    {titulo:"Empire Strike Back", director:"G. Lucas", fecha:1980},
    {titulo:"Riders of The Lost Ark", director:"S. Spielberg", fecha:2011},
    {titulo:"Back to the Future", director:"R. Zemeckis", fecha:1985}
]

// const peliNueva = (a) => {
//     for (let i= 0; i < a.length; i++){
//     if (a[i].fecha > 2010) {
//         let nueva = a[i]
//         return nueva
//     }
// }
// }

const peliNueva = peliculas.filter(obj => {
    if (obj.fecha >2010) {
        return true
    } else {
        return false
    }
})

console.log(peliNueva)

const arrDirec = peliculas.map(function (obj){
    var algo = []
    algo = obj.director
    return algo
})

console.log(arrDirec)

const arrTitulo = peliculas.map(function (obj){
    var algo = []
    algo = obj.titulo
    return algo
})

console.log(arrTitulo)


console.log(peliculas[1].director.concat(peliculas[1].titulo))

const unirArr = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr += arr[i].director.concat(" ",arr[i].titulo," - ")        
    }
    return newArr
}

console.log(unirArr(peliculas))



const propagacion = unirArr(peliculas)

console.log(...propagacion)

