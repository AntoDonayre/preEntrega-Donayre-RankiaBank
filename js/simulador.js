// Toggle light & darkmode //
console.log("-------------localStorage para mantener darkmode por usuario (visualizado en HTML)-------------")
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

// Simulador de cuotas //
console.log("---simulador de cuotas con DOM, visualizado en HTML (simulador de cuotas page)---")

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

    let pSug = {monto: Math.round(montoPrestamo*1.10), cuotas: cuotasCliente, tasa: interesAnual + "%", cuota: Math.round(cuotaMensual*1.10),}
    console.log(pSug)
    let p1 = {monto: montoPrestamo*1.05, cuotas: cuotasCliente, tasa: interesAnual + "%", cuota: Math.round(cuotaMensual*1.05),}
    console.log(p1)
    let p2 = {monto: montoPrestamo*1.20, cuotas: cuotasCliente, tasa: interesAnual + "%", cuota: Math.round(cuotaMensual*1.20),}
    console.log(p2)

    if(tipoMoneda.toLowerCase() =="soles"){
            // console.log("s/"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="s/" + cuotaMensual

            document.getElementById("montoPR").innerHTML= "<h4>" + "s/" + pSug.monto + "</h4>"
            document.getElementById("tasaPR").innerHTML= "<p>" + "Tasa: " + pSug.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR").innerHTML= "<p>" + cuotasCliente + " pagos de " + "s/" + pSug.cuota + " al mes" + "</p>"

            document.getElementById("montoPR1").innerHTML= "<h4>" + "s/" + p1.monto + "</h4>"
            document.getElementById("tasaPR1").innerHTML= "<p>" + "Tasa: " + p1.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR1").innerHTML= "<p>" + cuotasCliente + " pagos de " + "s/" + p1.cuota + " al mes" + "</p>"

            document.getElementById("montoPR2").innerHTML="<h4>" + "s/" + p2.monto + "</h4>"
            document.getElementById("tasaPR2").innerHTML= "<p>" + "Tasa: " + p2.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR2").innerHTML= "<p>" + cuotasCliente + " pagos de " + "s/" + p2.cuota + " al mes" + "</p>"
        } else if(tipoMoneda.toLowerCase() == "dolares"){
            // console.log("$"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="$" + cuotaMensual

            document.getElementById("montoPR").innerHTML="<h4>" + "$" + pSug.monto + "</h4>"
            document.getElementById("tasaPR").innerHTML= "<p>" + "Tasa: " + p1.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR").innerHTML= "<p>" + cuotasCliente + " pagos de " + "$" + pSug.cuota + " al mes" + "</p>"

            document.getElementById("montoPR1").innerHTML="<h4>" + "$" + p1.monto + "</h4>"
            document.getElementById("tasaPR1").innerHTML= "<p>" + "Tasa: " + p1.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR1").innerHTML= "<p>" + cuotasCliente + " pagos de " + "$" + p1.cuota + " al mes" + "</p>"

            document.getElementById("montoPR2").innerHTML="<h4>" + "$" + p2.monto + "</h4>"
            document.getElementById("tasaPR2").innerHTML= "<p>" + "Tasa: " + p2.tasa + " anual" + "</p>"
            document.getElementById("cuotaPR2").innerHTML= "<p>" + cuotasCliente + " pagos de " + "$" + p2.cuota + " al mes" + "</p>"
        }
})
