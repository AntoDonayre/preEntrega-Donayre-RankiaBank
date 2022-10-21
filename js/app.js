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
            console.log("s/"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="s/" + cuotaMensual
            // document.write("<h2 class='simple-resul'>" + "S/" + cuotaMensual + "</h2>")
        } else if(tipoMoneda.toLowerCase() == "dolares"){
            console.log("$"+cuotaMensual)
            document.getElementById("resultadoCoutaMensual").innerHTML="$" + cuotaMensual
            // document.write("<h2 class='simple-resul'>" + "$" + cuotaMensual + "</h2>")
        }
} )