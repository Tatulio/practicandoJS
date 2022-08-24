const constante = "Soy una constante...con constancia";
//No se le puede asignar un nuevo valor a CONST
// constante = "Hola"
console.log(constante)

var a = 1;
console.log(a)

a =5
console.log(a)


let b = 1;
console.log(b)

b =5
console.log(b)



var variableVar = "Variable VAR"

for (var i = 0; i < 3; i++ ) {
    var variableVar = "Segunda Variable"
}

console.log(variableVar)
// En VAR afecta a Todo el codigo


let variableLet = "Variable LET"

for (let i = 0; i < 3; i++ ) {
    let variableLet = "Segunda Variable"
}

console.log(variableLet)
// En LET solo afecta al BLOQUE de codigo en el que se encuentre


// TIPYOF indica el tipo de dato que se pasa
console.log(typeof 1,typeof true,typeof NaN,typeof undefined,typeof "Hello")