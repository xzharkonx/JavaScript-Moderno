
// 17. Cortar Espacios en Blanco de un String

const producto = '                                   Monitor 20 pulgadas                                   ';

// Los espacios en blanco son considerados parte de la cadena de texto
console.log(producto);
console.log(producto.length);

// Eliminar del inicio..
console.log(producto.trimStart());
// Eliminar del final..
console.log(producto.trimEnd().length);

// En JavaScript se pueden crear o llamar los métodos de forma encadenada,
// es lo que se conoce como chaining
console.log(producto.trimStart().trimEnd());

// Elimina en ambas direcciones

console.log(producto.trim());
console.log(producto.trim().length);