// let desc1 = "Bienvenido a RankiaBank, calcula el valor de tus cuotas mensuales aquí"
// let desc2 = "Por favor rellena los siguientes datos:"+"\n"+"Tipo de moneda"+"\n"+"Monto"+"\n"+"N° de cuotas"+"\n"+"Tasa efectiva anual"
// alert(desc1)
// alert(desc2)

// const pedirMoneda = () => {
//     let monedaElegida = prompt("Por favor seleccione el tipo de moneda:"+"\n"+"soles"+"\n"+"dolares").toLowerCase();
//     while (monedaElegida !== 'dolares' && monedaElegida !== 'soles') {
//         alert('El tipo de moneda seleccionada, no se encuentra disponible por el momento, por favor selecciona entre soles o dolares');
//         monedaElegida = prompt("Por favor seleccione el tipo de moneda:"+"\n"+"soles"+"\n"+"dolares");
//     }
//     return monedaElegida;
// }
// const monedaDelUsuario = pedirMoneda();

// let monto = Number(prompt("Ahora ingrese el monto del préstamo a solicitar:"))

// let cuotas = Number(prompt("Ingrese el N° de cuotas:"))

// let tasa = Number(prompt("Ingrese la Tasa de Interés Anual:"))

// let cuotasS1 = (monto/cuotas)
// let cuotasS2 = (tasa/12)
// let resulCuotas = cuotasS1*cuotasS2
// let deudaTotal = resulCuotas+monto
// let cuotaMensual = Math.round(deudaTotal/cuotas)

// if(monedaDelUsuario =="soles"){
//     document.write("<h2 class='simple-resul'>" + "S/" + cuotaMensual + "</h2>")
// } else if(monedaDelUsuario == "dolares"){
//     document.write("<h2 class='simple-resul'>" + "$" + cuotaMensual + "</h2>")
// }

// console.log("------Objetos (préstamos ofrecidos)------")

// //prestamo 1
// let p1 = "Básico"
// let valor1 = monto + (monto*0.10)
// let t1 = tasa

// let prestamo1 = {
//     p1 : "Básico",
//     valor1 : monto + (monto*0.10),
//     t1 : tasa + "%",
// }

// console.log(prestamo1)

// //prestamo 2
// let p2 = "Complejo"
// let valor2 = monto + (monto*0.10)
// let t2 = tasa

// let prestamo2 = {
//     p2 : "Complejo",
//     valor2 : monto + (monto*0.30),
//     t2 : tasa + "%",
// }

// console.log(prestamo2)


// //prestamo 3
// let p3 = "Ejecutivo"
// let valor3 = monto + (monto*0.10)
// let t3 = tasa

// let prestamo3 = {
//     p3 : "Ejecutivo",
//     valor3 : monto + (monto*0.40),
//     t3 : tasa + "%",
// }

// console.log(prestamo3)

// console.log("------Arrays (montos de los prestamos ofrecidos)------")

// //Arrays
// let tipoPrestamo = [prestamo1.valor1, prestamo2.valor2, prestamo3.valor3]

// console.log(tipoPrestamo)

// console.log("------Filtrado array (montos que superen los 100 000)------")

// //Filtrado de arrays

// let filtro = tipoPrestamo.filter(element => element > 100000);
// console.log(filtro)

// console.log("------Tipo de cliente------")

// //Tipo de cliente (solo para la practica en proyecto final)

// if(prestamo1.valor1 < 40000 && prestamo2.valor2 < 40000 && prestamo3.valor3 < 40000){
//     console.log("Cliente Regular")
// } else if(prestamo1.valor1 > 100000 && prestamo2.valor2 > 100000 && prestamo3.valor3 > 100000) {
//     console.log("Cliente Premium")
// } else {
//     console.log("Cliente VIP")
// }
