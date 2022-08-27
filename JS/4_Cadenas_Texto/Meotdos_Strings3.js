//Metodos Strings 3

// Expresiones irregulares y eliminarlas
// http://regexr.com

let texto = "Tres Anillos para los Reyes Elfos bajo el cielo. Siete para los Señores Enanos en casas de piedra. Nueve para los Hombres Mortales condenados a morir. Uno para el Señor Oscuro, sobre el trono oscuro en la Tierra de Mordor donde se extienden las Sombras. Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras."

//Devuelve todas las instancias de la palabra buscadas, incluso dentro de otras palabras
console.log(texto.match(/los/g))

// Devuelve un booleano si encuentra la palabra buscada
console.log(texto.includes("elfos")) // Porque la palabra es Elfos, con minuscula tira falso
console.log(texto.toLowerCase().includes("elfos"))

//Saber si el texto empieza con una palabra
console.log(texto.startsWith("Tres Anillos para los Reyes Elfos"))

//Saber si el texto termina con una palabra
console.log(texto.endsWith("Mordor donde se extienden las Sombras."))