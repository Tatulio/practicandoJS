let numero = 1

const factorial = () => {
    let acumulador = 1
    for (let i = 0 ; i < 10; i ++) {
        console.log(acumulador =  acumulador * (i+1))
    }
}

factorial()

let i = 0;
let max = 10

let acumulador = 1  

while (i < max) {   
    
    acumulador += acumulador * (i+1)
    i ++
    console.log(acumulador)
    
}


// let i = 0;
// let max = 100

// let acumulador = 1  

while (i < max) {   
    
    acumulador += acumulador * (i+1)
    i ++
    if (acumulador > 1000) {
        console.log(acumulador/1000)
    } else {
        console.log(acumulador)
    }
    if (i > 10) {
        break
    }
}