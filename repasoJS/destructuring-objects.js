const mascota = {
    nombre: "Firulais",
    edad: 5,
    tipo: "perro",
    vivo: true,
    caracteristicas: ["jugueton", "amigable", "fiel"]
}

const nombreMascota = mascota.nombre;

const {edad, nombre} = mascota;
console.log(edad, nombre);