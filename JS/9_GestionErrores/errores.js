

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // return false
    throw Error("El Valor debe ser de tipo Numero") // Si no es number, lanzamos un error
}

const elDoble = miFuncion(10)

console.log(miFuncion(10)) // No quereos un NaN como mensaje de error

const numero = "10"

try {
    // Codigo que puede fallar
    console.log("Se Ejecuta bien")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // Si falla, quiero que ejecute esto
    console.error(`El valor de e es: ${e}`)
    console.error("Error!")
} finally {
    console.log("Esto se va a ejecutar si hay error como si no existe")
}

// InternalError, SyntaxError, TypeError, RangeError, ReferenceError