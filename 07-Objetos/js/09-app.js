
// # 41. Sellar un Objeto.

// ? Recuerda usar el modo estricto strict para habiliar los métodos.

"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// # Sellando al Objeto
// * Con el método seal es como sellar el Objeto.
// ! Con seal, no se pueden ni agregar ni eliminar las propiedades, pero si se pueden modificar.
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "image.jpg"; // ! Está no sirve. Marcaría un error.
// delete producto.precio; // ! Está no sirve. Marcaría un error.

console.log(producto);

// * Si queremos saber si un objeto está sellado.
console.log(Object.isSealed(producto));