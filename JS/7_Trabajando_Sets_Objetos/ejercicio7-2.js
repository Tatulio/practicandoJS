let yo = 
    {
        nombre:"Freyre",
        apellido:"Vidal",
        edad:28,
        altura:1.61,
        eresDesarrollador: false
    }


let amigo1 = 
    {
        nombre:"Juan",
        apellido:"Perez",
        edad:25,
        altura:1.61,
        eresDesarrollador: false
    }

let amigo2 = {
        nombre:"Pedro",
        apellido:"Pan",
        edad:21,
        altura:1.61,
        eresDesarrollador: false
    }




let edad = yo.edad

console.log(edad)

const unirObjetos = (a, b, c) => {
    let nuevo = []
    nuevo.push(a)
    nuevo.push(b)
    nuevo.push(c)
    return nuevo
}

console.log(unirObjetos(yo, amigo1, amigo2))

let nuevo = unirObjetos(yo, amigo1, amigo2)

console.log(nuevo)

console.log(nuevo.sort((a,b) => a.edad + b.edad))