/* eslint-disable no-undef */
// $("li").hide()


// $("h1").hide()

/*
$(() => { Se ejecuta cuando termine de carga todo

})
*/
$(document).ready(() => { // # => ID -- . => class
    $("#el-1").hide()
    $(".show-btn").click(() => {
        console.log("Ocultando....")
    })
    $(".hide-btn").click(() => {
        //$("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color:"red"})
    })

    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>") al final
        $("ul").prepend("<li>New Element</li>")
        console.log("Se agrego elemento") // al principio
    })

    $("li").mouseenter((elem) => { // agrego el elemento en el que quiero hacer objetivo
        elem.target.style.color = "blue"
        console.log("Hover del mouse")
    })

    $("li").mouseleave((elem) => { // agrego el elemento en el que quiero hacer objetivo
        elem.target.style.color = "black"
        console.log("Hover del mouse saliendo")
    })
}) 






