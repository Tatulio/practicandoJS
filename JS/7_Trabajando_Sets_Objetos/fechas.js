// Trabajando con Fechas

const fecha = new Date()

console.log(fecha)

// Los meses inician en 0 = Enero | 11 = Diciembre
const fecha2 = new Date(1984, 10, 7, 1, 23, 52, 192)
console.log(fecha2)

const fecha3 = new Date(1000000000000)
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:35")
console.log(fecha4)

// Comparar Fechas, si una es posterior a la otra
console.log(fecha > fecha4)

const fecha5 = new Date(1984, 10, 7, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) // Asi no se comparan fechas, hay que convertirlas a milisegundos
// .GETTIME

console.log(fecha2.getTime() === fecha5.getTime())

// Obtener el dia, mes y año de una fecha
// .GATEDATE()
console.log(fecha2.getDate())

// Obtener el mes  0 = Enero | 11 = Diciembre
// .GETMONTH()
console.log(fecha2.getMonth()+1)

// Obtener el año
// .GETFULLYEAR()
console.log(fecha2.getFullYear())

// Mostrar fecha en String 
// .TOLOCALDATESTRING
console.log(fecha2.toLocaleDateString("en-GB"))
console.log(fecha2.toLocaleDateString("en-US"))