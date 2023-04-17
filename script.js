const h1 = document.querySelector('h1');
const input1 = document.querySelector('#cal1');
const input2 = document.querySelector('#cal2');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#result');

// se crea un evento de escucha con el atributo click, y el comando a ejecutar
// cabe mencionar que el comando siendo un metodo no se llama como tal 
btn.addEventListener( 'click', btnClick );

function btnClick(){
    console.log('escuchando click');
    //Se usa la funcion de number para convertir el tipo string de un input a numero
    console.log(`${Number(input1.value) + Number(input2.value)}`);
    result.innerHTML = Number(input1.value) + Number(input2.value);
}
