// BIFURCACIONES IF....ELSE

let saldo = 50
let efectivo = 20


if (efectivo < saldo) {
    console.log("puede sacar dinero")
}


if (efectivo < saldo) {
    console.log("puede sacar dinero")
}
else {
    console.log("saldo insuficiente")
}

// If else + If else +

let nota = 5

if (nota === 5) {
    console.log("Pasaste")
} else if (nota === 4) {
    console.log("Podes mejorar")
} else if (nota === 3) {
    console.log("No pasaste")
}


// Switch

let calificacion = 1

switch (calificacion) {
    case 5:
        console.log("Bien")
        break;
    case 4:
        console.log("Meh")
        break;
    case 3:
        console.log("Mal")
        break;
    default:
        console.log("Error")
}