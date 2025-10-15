//se declara con function

function sumar (num) {
    console.log(num+num)
}

sumar(10)

//si solo recibe un parametro se pueden obviar los parentesis
const sumarUno = num => {
    console.log(num+num)
}

//con dos o mas parametros si se deben poner los parentesis, ademas, si solo tiene una linea de codigo se pueden obviar las llaves y el return

const sumarDos = (num1, num2) => {
    return (num1 + num2);
}

const sumarDosSimple = (num1, num2) => num1 + num2;

const resultado = sumarDosSimple(6,6);
console.log(resultado)


const mensaje = nombre => 'hola soy ' + nombre;


const resultadoMensaje = mensaje('Armando');
console.log(resultadoMensaje)

//podemos poner valores por defecto en los parametros de las funciones
const sumaTres = (num = 0) => {
    console.log(num + 3)
}

sumaTres(5);