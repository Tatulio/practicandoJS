// Comparaciones

// Igualdad = , == , === o != , !==

if (5 == 5) {
    console.log( "5 es igual a 5" )
}

if (5 === 5) {
    console.log( "5 es muy igual a 5" )
}

let a = 5
let b = 5

if (a == b) {
    console.log( "a es igual a b" )
}

if (a === b) {
    console.log( "a es muy igual a b" )
}

let c = 4
let d = "cuatro"

if (c != d) {
    console.log(c + " es distinto a " + d)
}

if (c !== d) {
    console.log(c + " es distinto a " + d)
}


// Comapracion mayor que y menor que

let max = 10
let min = 5

if (max > min) {
    console.log("max es mayor que min")
}

if (max >= 10) {
    console.log("max es mayor o igual que 10")
}

if (min < max) {
    console.log("max es menor que min")
}

if (min <= max) {
    console.log("max es menor o igual que max")
}