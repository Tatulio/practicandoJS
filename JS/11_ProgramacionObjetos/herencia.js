// Inheritance / Herencia
class Persona {
    nombre;
    edad;
    constructor(nombre, edad, isDeveloper) { // Como se declaran las variables dentro de un objeto
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
}

// Creo una clase que tenga una herencia de Persona
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {// Creamos dentro, un atributo especial para aquellos que si son desarrolladores
    super(nombre, edad) // Nos permite usar el contructor de la clase padre (Persona)
    this.lenguaje = lenguaje;         
    }

    saludos() { // Override, volver a definir algo
        super.saludo()// Polimorfismo
        console.log(`Soy Desarrollador de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrollador("Peter", 32, "Js")


console.log(nuevoDev)





