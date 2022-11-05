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

//burguer menu
const burguerMenu = document.querySelector('#burguerIcon')
burguerMenu.addEventListener('click', () => {
    document.querySelector('#navMenuMobileCont').style.display = "block"
})

const closeBurguer = document.querySelector('#closeMenu')
closeBurguer.addEventListener('click', () => {
    document.querySelector('#navMenuMobileCont').style.display = "none"
})