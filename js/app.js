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

//Obj cuentas
console.log("-------------tipos de cuentas-------------")
var cuentaAhorro = document.getElementById("prdNameC1")
var cuentaSueldo = document.getElementById("prdNameC2")
var cuentaDigital = document.getElementById("prdNameC3")
var cuentaInternacional = document.getElementById("prdNameC4")

var cuentas = {
    cuentaAhorro: cuentaAhorro.innerHTML,
    cuentaSueldo: cuentaSueldo.innerHTML,
    cuentaDigital: cuentaDigital.innerHTML,
    cuentaInternacional: cuentaInternacional.innerHTML,
}

console.log (cuentas)

//obj tarjetas
console.log("-------------tipos de tarjetas-------------")
var tarjetaDebito = document.getElementById("prdNameT1")
var tarjetaCredito = document.getElementById("prdNameT2")

var tarjetas = {
    tarjetaDebito: tarjetaDebito.innerHTML,
    tarjetaCredito: tarjetaCredito.innerHTML,
}

console.log(tarjetas)

//obj seguros
console.log("-------------tipos de seguros-------------")
var seguroTarjetas = document.getElementById("prdNameS1")
var seguroFinanciero = document.getElementById("prdNameS2")
var seguroVida = document.getElementById("prdNameS3")
var seguroVehicular = document.getElementById("prdNameS4")

var seguros = {
    seguroTarjetas: seguroTarjetas.innerHTML,
    seguroFinanciero: seguroFinanciero.innerHTML,
    seguroVida: seguroVida.innerHTML,
    seguroVehicular: seguroVehicular.innerHTML,
}

console.log(seguros)

//JSON con objetos//
console.log("-------------pasando de (obj) a (string)-------------")
var cuentasJSON = JSON.stringify(cuentas)
var tarjetasJSON = JSON.stringify(tarjetas)
var segurosJSON = JSON.stringify(seguros)

console.log(cuentasJSON)
console.log(tarjetasJSON)
console.log(segurosJSON)

//JSON en localStorage
console.log("-------------almacenando los (string) en localStorage, revisar application-------------")
localStorage.setItem("cuentas", cuentasJSON)
localStorage.setItem("tarjetas", tarjetasJSON)
localStorage.setItem("seguros", segurosJSON)

//array con nuestros objetos
console.log("-------------array con objetos-------------")
var productos = [cuentas, tarjetas, seguros]
console.log(productos)

//filtro de arrays
console.log("-------------filtro de arrays-------------")
var clntFilter1 = productos.filter(element => element = cuentaInternacional);
var clntFilter2 = productos.filter(element => element = tarjetaCredito);
var clntFilter3 = productos.filter(element => element = seguroVehicular);
var clntFilter4 = productos.filter(element => element = seguroTarjetas);



if(clntFilter1 && clntFilter2 && clntFilter3 && clntFilter4){ /*falta igualarlo a una variable del html*/
    console.log("Cliente VIP")
}else{
    console.log("Cliente Regular")
}

