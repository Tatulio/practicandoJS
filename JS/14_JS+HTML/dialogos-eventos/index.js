const boton = document.querySelector("#btn");

console.log(boton)


// Mostrar alerta
boton.addEventListener("click", () => { 
    //alert("click")
    //confirm("Estas de acuerdo?") && console.log("ok")
    // confirm("Estas de acuerdo?")
    //     ? console.log("Si")
    //     : console.log("No")
    const respuesta = confirm("Seguro")
        if (respuesta) {
            console.log("Estas de acuerdo")
        } else {
            console.log("No estas de acuerdo")
        }
})


const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre?")
    if (nombre){
    console.log("Tu nombre es " + nombre)
    } else {
        console.log("No escribiste nombre")
    }
})


const lista = [
    {
    nombre: "Tatu",
    edad: 510
    },
    {
    nombre: "Tatulio",
    edad: 256
    },
    {
    nombre: "Tuertulio",
    edad: 128
    }
]

console.table(lista)








