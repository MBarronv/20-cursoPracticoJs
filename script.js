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
const idDiv = document.querySelector('#idDiv');

console.log({h1})

// para ver todos los elementos en un solo console
console.log({
    h1,
    p,
    classParrafo,
    idParrafo,
    input
})


// con innerHTML se puede realizar inyeccion de codigo html
h1.innerHTML = "Acabamos de modificar el html del tag h1 mediante el obj h1.innerHTML";
// una manera de protegernos es usando el metodo innerText
h1.innerText = "Acabamos de modificar el html del tag <h1> mediante el obj h1.innerText";


// la manera mas comun de modificar un atributo es mediante los mentodos:
//h1.getAttribute
//h1.setAttribute
console.log("Acabamos de leer el atributo de h1 style= " + h1.getAttribute('style') );
h1.setAttribute('style', 'color: green;');
console.log("Acabamos de modificar el atributo de h1 style='color: green'" );


// para realizar modificaciones al atributo class se usa :
h1.classList.add('classH1Font');
h1.classList.remove('blue');
//h1.classList.toggle('blue'); muy usado
//h1.classList.contains('blue'); muy usado regrea un booleans   


// para acceder al atributo value de los inputs
input.value=" Se modifica el atrituto value directo sin uso del setAttribute";

// para crear un nuevo elemento html se usa :
console.log("creamos una nuevo elemento en este caso un tar img");
const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg');
img.setAttribute('style', 'width: 100px;');
console.log(img);
// ahora falta colocarlo dentro de otro elemento usamos un div
//idDiv.innerHTML
//idDiv.append
//idDiv.appendChild
//idDiv.prepend
idDiv.append(img);

// que pasa si usamos idDiv.innerHTML
idDiv.innerHTML = img;
// manda un ERROR por que lo queiere pegar como string
    