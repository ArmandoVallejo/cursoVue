//var permite declarar una variable, aunque se haya declarado antes
let edad = 10
edad = 20
//Con let , se declara una variable y ya despues no se puede declarar otra vez pero si modificar el valor
const nombre = "Juan"

console.log(nombre)

if(true){
    let edad2 = 30
    console.log(edad2)
}
console.log(edad)

const arrayNumero = [1,2,3,4,5];
arrayNumero.push(6)
console.log(arrayNumero)

const persona = {
    nombre: "Pedro",
    edad: 30
}

persona.pais = "Mexico"

console.log(persona);