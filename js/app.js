// Toggle light & darkmode

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //LocalStorage para guardar el light o darkmode
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }
});

//Obtenemos el modo actual
if(localStorage.getItem('dark-mode') == 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

//JSON con objetos

// console.log(document.getElementById("#accounts"))

// Simulador de cuotas

const inputForm = document.getElementById("inputForm")
inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const tipoMoneda=document.getElementById("tipoMoneda").value;
    const montoPrestamo=Number(document.getElementById("montoPrestamo").value);
    const cuotasCliente=Number(document.getElementById("cuotasCliente").value);
    const interesAnual=Number(document.getElementById("interesAnual").value);

    let cuotasS1 = (montoPrestamo/cuotasCliente)
    let cuotasS2 = (interesAnual/12)
    let resulCuotas = cuotasS1*cuotasS2
    let deudaTotal = resulCuotas+montoPrestamo
    let cuotaMensual = Math.round(deudaTotal/cuotasCliente)

    if(tipoMoneda.toLowerCase() =="soles"){
            // console.log("s/"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="s/" + cuotaMensual
        } else if(tipoMoneda.toLowerCase() == "dolares"){
            // console.log("$"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="$" + cuotaMensual
        } 
})




/////////////////////////////////////
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