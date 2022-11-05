//sweet alert
const btn = document.querySelector('#adqButton')
btn.addEventListener('click', () => {
    swal.fire({
        title:'Llámanos!',
        text:'Contacta a unos de nuestros asesores y pregunta por la mejor tarjeta para ti.',
        confirmButtonText: '(01) 205-0505',
        confirmButtonColor: '#033FFF',
    });
})

const appBtn = document.querySelector('#appBtn')
appBtn.addEventListener('click', () => {
    swal.fire({
        imageUrl: '/img/RankiaBankApp.png',
        title:'Nueva app de RankiaBank',
        text:'Realiza todas tus operaciones desde el app, disponible en playstore.',
        confirmButtonText: 'Descargar',
        confirmButtonColor: '#033FFF',
    });
})

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Swal.fire({
        title: 'Compra la casa de tus sueños',
        text: 'Preguntale a nuestros asesores si calificas para el nuevo crédito hipotecario RankiaBank!',
        imageUrl: '/img/casaNueva.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#033FFF',
      }));
    }, 2000);
  });