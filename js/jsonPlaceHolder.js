const coment1 = document.querySelector('#coment1')
const coment2 = document.querySelector('#coment2')
const coment3 = document.querySelector('#coment3')
const coment4 = document.querySelector('#coment4')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {coment1.innerHTML = '<p>' + '"' + (data[0].body) + '"' + '</p>'})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {coment2.innerHTML = '<p>' + '"' + (data[1].body) + '"' + '</p>'})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {coment3.innerHTML = '<p>' + '"' + (data[2].body) + '"' + '</p>'})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {coment4.innerHTML = '<p>' + '"' + (data[3].body) + '"' + '</p>'})