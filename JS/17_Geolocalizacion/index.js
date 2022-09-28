/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function initMap() {
    const posicion1 ={
    lat: 75.363,
    lng: 61.044
    }
    const posicion2 ={
        lat: 125.363,
        lng: 31.044
    }
    const posicion3 ={
        lat: -15.363,
        lng: 121.044
    }
    // eslint-disable-next-line no-unused-vars, no-undef
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    // eslint-disable-next-line no-unused-vars, no-undef
    const marker1 = new google.maps.Marker({
        position: posicion1,
        map,
        title: "inicio"
    })
    const marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "inicio"
    })
    const marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "inicio"
    })
    // marker.setPosition({lat, lng})
    geoPosiciona() {

    }
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}