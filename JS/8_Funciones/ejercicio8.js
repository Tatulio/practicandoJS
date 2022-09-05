const siempreTrue = (algo = true) => {
    console.log(algo);
}

siempreTrue()

const cincoSegTarde = (texto) => {
    console.log("Hola soy una promesa");
}

setTimeout(cincoSegTarde, 5000)


const generadoraAutomatica = () => {
    let id= 0
    while(true) {
        id++
        if (id === 5) {
            return id
        } 
        yield id
    }
}

const generador = generadoraAutomatica()

console.log(generador.next().value)