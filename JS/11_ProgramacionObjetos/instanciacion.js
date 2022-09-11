// Metodo Constructor, metodo por defecto

class Persona {
    nonbre;
    edad;
    isDeveloper;
    constructor(nonbre, edad, isDeveloper) { // Como se declaran las variables dentro de un objeto
        this.nonbre = nonbre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nonbre}, tengo ${this.edad} años`)
    }
}

const nueva_person = new Persona ("Jack", 21 ,false) // Al usar NEW, crea un nuebo objeto, en este caso de la clase que indicamos: PERSONA
console.log(nueva_person)
nueva_person.saludo()


let numero = 60 // Inicializar
console.log(typeof numero)

let persona_2 = new Persona ("Maria",21, false)
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona) // instanceof parecido a typeof pero con objetos, en este caso, si persona_2 es igual a la clase Persona de objeto