// // LOCAL STORAGE

// // localStorage.setItem("nombre","Tatu")
// // // Cambiar el nombre
// // localStorage.setItem("nombre","Tatulio")

// // Acceder el nombre guardado en el localStorage
// console.log(localStorage.getItem("nombre"))

// // Guardando objeto literal
// localStorage.setItem("persona", JSON.stringify({ nombre: "Tatu", edad: 254}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// // JSON.stringify convierte un objeto/array a un String
// // JSON.parse a un String converitdo por stringify lo vuelve un objeto/array

// // Eliminat del localStorage
// localStorage.removeItem("nombre")




// SESION STORAGE

sessionStorage.setItem("nombre-sesion", "Tatu")



// COOKIERS
// se accede por document.cookie

document.cookie = "nombreCookie=TatuCookie"


// Caducidad a las cookies
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023,0,1).toISOString


console.log(document.cookie)

