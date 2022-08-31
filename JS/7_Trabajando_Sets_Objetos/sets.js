// Sets o Conjuntos

const array = [1, 2, 3, 4, 5, 6, 7,]

const miSet = new Set(array) // Lo convierte en un objeto {1, 2, 3, 4, 5, 6, 7}
// Los Sets NO permiten almacenar datos que ya existen (duplicados)
// Nos permite asegurarnos que no hay valores duplicados
console.log(array)
console.log(miSet)


// .ADD() añadir valores
// No añade valores duplicados
miSet.add(9)
miSet.add("Hello")
miSet.add("There")
console.log(miSet)


// .DELETE () eliminar valores
miSet.delete("There")
console.log(miSet)


// . CLEAR()
// Limpia todo el Set { }
//miSet.clear()
console.log(miSet)


// .HAS() y .INCLUDES()
// Si dentro del array exist,e devuelve un true

console.log(miSet.has("Hello"))
console.log(array.includes(3))


// .SIZE()
console.log(miSet.size)


// Interaccion de los valores dentro
miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values() // Nos aseguramos de tener un array con valores unicos
console.log(it_miSet)

const ar_miSet = [...miSet] 
console.log(ar_miSet)