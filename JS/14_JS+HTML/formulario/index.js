const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => { // evita que se ejecute el enviar
    console.log(evento)
    evento.preventDefault()
}
)

