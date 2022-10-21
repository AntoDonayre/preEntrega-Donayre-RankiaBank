function captura(){
    const tipoMoneda=document.getElementById("tipoMoneda").value;
    const montoPrestamo=Number(document.getElementById("montoPrestamo").value);
    const cuotasCliente=Number(document.getElementById("cuotasCliente").value);
    const interesAnual=Number(document.getElementById("interesAnual").value);
    
    let cuotasS1 = (montoPrestamo/cuotasCliente)
    let cuotasS2 = (interesAnual/12)
    let resulCuotas = cuotasS1*cuotasS2
    let deudaTotal = resulCuotas+montoPrestamo
    let cuotaMensual = Math.round(deudaTotal/cuotasCliente)

    document.getElementById('resultadoCoutaMensual').innerHTML = cuotaMensual;

    // if (tipoMoneda==""){
    //     alert("Porfavor digite el tipo de moneda");
    //     document.getElementById("tipoMoneda").focus();
    // }else if (montoPrestamo==""){
    //     alert("Porfavor digite el monto total del préstamo solicitado");
    //         document.getElementById("montoPrestamo").focus();
    // }else if (cuotasCliente==""){
    //     alert("Porfavor digite un número de cuotas válido");
    //         document.getElementById("cuotasCliente").focus();
    // }else if (interesAnual==""){
    //     alert("Porfavor digite un número de cuotas válido");
    //         document.getElementById("interesAnual").focus();
    // }else{
    //     console.log(tipoMoneda);
    //     console.log(montoPrestamo);
    //     console.log(cuotasCliente);
    //     console.log(interesAnual);
    //     document.getElementById("tipoMoneda").value="";
    //     document.getElementById("montoPrestamo").value="";
    //     document.getElementById("cuotasCliente").value="";
    //     document.getElementById("cuotasCliente").value="";
    //     document.getElementById("tipoMoneda").focus();
    // }
}