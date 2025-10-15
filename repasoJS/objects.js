const mascota = {
    nombre: "Firulais",
    edad: 5,
    tipo: "perro",
    vivo: true
}

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.tipo);

mascota.id = 1;

mascota.caracteristicas = ["jugueton", "amigable", "fiel"];

console.log(mascota);
console.log(mascota.caracteristicas[1]);