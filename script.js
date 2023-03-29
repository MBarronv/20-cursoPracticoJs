console.log("Iniciamos el manejo del DOM");


// esta querySelector puede aceder a los selectores tal como lo hariamos en CSS
// h1 { color: black;}
// .classParrafo { ... }
// #idParrafo { ... }
const h1 = document.querySelector('h1');
const p = document.querySelector('p');          // me muestra el primer p
//const p = document.querySelectorAll('p');       // muestra una lista con todos los p aunque solo hubiera un solo p
const classParrafo = document.querySelector('.classParrafo');
const idParrafo = document.querySelector('#idParrafo');
const input = document.querySelector('input');

console.log({h1})

// para ver todos los elementos en un solo console
console.log({
    h1,
    p,
    classParrafo,
    idParrafo,
    input
})