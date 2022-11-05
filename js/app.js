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
    document.querySelector('#navMenuMobileCont').style.display = "block",
    document.querySelector('#navMenuMobile').style.display = "flex"
    const promBurguerMenu = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(
                document.querySelector('#navMenuMobile').style.transform = "translateX(0%)",
                document.querySelector('#navMenuMobile').style.transition = "1s")
        }, 100)
    })
})

const closeBurguer = document.querySelector('#closeMenu')
closeBurguer.addEventListener('click', () => {
    document.querySelector('#navMenuMobile').style.transform = "translateX(-100%)",
    document.querySelector('#navMenuMobileCont').style.transition = "1s"
    const promBurguerMenu1 = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(
                document.querySelector('#navMenuMobile').style.display = "none",
                document.querySelector('#navMenuMobileCont').style.display = "none")
        }, 1000)
    })
})