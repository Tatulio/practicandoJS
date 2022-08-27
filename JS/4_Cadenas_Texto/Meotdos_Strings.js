// Metodos Utilizados en Strings

// Longitus del String

let str = "Hello There. General Kenobi!"

console.log(str.length)

// Obtener pardes de cadenas de Strings
// slice() - substring() - substr()

let slice_str = str.slice(5,11) // Posicion inicial y final
console.log(slice_str)

let substring_str = str.substring (5,11) // Posicion inicial y final
console.log(substring_str)

let substr_str = str.substr (13,7) // Es un modo obsoleto // Posicion inicial y longitus
console.log(substr_str)     


// Reemplazar parte del contenido de una cadena de texto
// Solo reemplaza el primer resultado
let cadena = "Hola, mi nombre es Jolues"
console.log(cadena)

cadena.replace("Jolues","Jaley") // Indico lo que quiero buscar y por que lo voy a reemplazar
console.log(cadena.replace("Jolues","Jaley"))

// Usar /g para que reemplaze a todos -> "Anillo" => /Anillo/g
let texto = "«Tres Anillos para los Reyes Elfos bajo el cielo. Siete para los Señores Enanos en casas de piedra. Nueve para los Hombres Mortales condenados a morir. Uno para el Señor Oscuro, sobre el trono oscuro en la Tierra de Mordor donde se extienden las Sombras. Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras»."

console.log(texto.replace(/Anillo/g,"Femboy"))

