const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

// btn.addEventListener('click',btnOnClick);//escucha cada vez que ocurra un evento y luego corre el codigo. No enviar btn onclick con parentesis
// //Primero checa de cual selector html, cual de todos los posibles eventos y luego es cual funcion debe mandar a llamar. Parentesis solo cuanod esta en el HTML

form.addEventListener('submit', btnOnClick);//Ahora esto es con elevento de submit default del formulario
// El problema sigue siendo que se refresca y el resultado no se mantiene
// Escuchar eventos

function btnOnClick(event){

    console.log({event});
    event.preventDefault();//Para deshabilitar la propiedad para que no se refresque por default
    let num1=0, num2=0;
    num1=Number(input1.value);
    num2=parseInt(input2.value);//parseInt egresa todo lo que sea nmero lo que sea otro caracter lo corta.
    //console.log('Evento de click');
    console.log(num1 + num2);

    pResult.innerText = "Resultado" + num1 + num2;

};

