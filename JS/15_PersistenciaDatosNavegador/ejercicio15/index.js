let nombre = "Tatu"
let apellido = "Lio"

let nombreCompleto = {nombre, apellido}

localStorage.setItem(nombreCompleto)
console.log(localStorage.getItem(nombreCompleto))


sessionStorage.setItem(nombreCompleto)
console.log(sessionStorage.getItem(nombreCompleto))


document.cookie = "nombreCompletoCookie=nombreCompleto"

console.log(document.cookie)


