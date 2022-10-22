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

var inputForm = document.getElementById("inputForm")
inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    var tipoMoneda=document.getElementById("tipoMoneda").value;
    var montoPrestamo=Number(document.getElementById("montoPrestamo").value);
    var cuotasCliente=Number(document.getElementById("cuotasCliente").value);
    var interesAnual=Number(document.getElementById("interesAnual").value);

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