const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".imgBasura")
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        //const elemento_fantasma = document.querySelector(".imagen-fantasma")
        //event.dataTransfer.setDragImage(elemento_fantasma, 0 , 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("Termine de arrastras al parrafo: " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
    
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })
    seccion.addEventListener("drop", () => {
        console.log("Drop")
        //const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id: ", id_parrafo)
        //const parrafo = document.getElementById(id_parrafo)
        //seccion.appendChild(parrafo)
    })
})

papelera.forEach(imgBasura => {
    imgBasura.addEventListener("dragend", () => {        
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove
    })
})



