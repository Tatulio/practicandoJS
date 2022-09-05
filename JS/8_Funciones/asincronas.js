// Funciones Asincronas y Promesas

// Asincronas, llamadas a bases de datos externas y pueden demorar

function miAsinc() { // Haceu na llamada a una base de datos externa y pueden dar error 

}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() *2)
    // Si esta ok
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ejecuto bien: "))
    .catch(() => console.log("Error"))
    .finally(()=> console.log("Siempre se Ejecuta")) // Se ejecuta siembre sea correoto o incorrecto