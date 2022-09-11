// Me interesa que no se pueda cambiar el nombre desde afuera
// Propiedades y Atributos Publicos 
// persona.nombre = "Adios"
// console.log(persona.nombre)


// Propiedades y Atributos Privados
// Privados con #, solo se pueden acceder desde dentro de la clase
class Persona {
    #nombre;
    #edad;    
    // Protegidas: _, solo se pueden acceder desde dentro de la clase y clases descendientes
    _isDeveloper = true
    constructor(nombre, edad) { // Como se declaran las variables dentro de un objeto
        this.#nombre = nombre;
        this.#edad = edad;
        
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
    obtenNombre () { // Es una funcion Getter que nos permite acceder a un atributo protegido
        return this.#nombre
    }
    // obtenEdad () {
    //     return this.#edad
    // }
    getEdad() {
        return this.#edad
    }
    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
        //return this.#edad
    }
}
const persona = new Persona("John", 41) 
console.log(persona)
console.log(persona.obtenNombre())

// Getter: Metodos para obtener atributos o motedos privados y protegidos

// Getter
const edad = persona.getEdad()
console.log(edad)

// Setter: Metodos para cambiar el valor de algunos atributos privados o protegidos
// Quiero cambiar la edad de la persona

persona.setEdad(44)
console.log(edad.getEdad())