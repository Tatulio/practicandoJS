class Estudiante {
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"]
    
    obtenDatos () { 
        return this.nombre, this.asignaturas
    }

}



const estudiante1 = new Estudiante("John") 
console.log(estudiante1)
console.log(estudiante1.obtenDatos())


const estudiante2 = new Estudiante("Mike") 
console.log(estudiante2)
console.log(estudiante2.obtenDatos())
