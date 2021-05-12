
// # 17. Cortar Espacios en Blanco de un String

const producto = '                                   Monitor 20 pulgadas                                   ';

// Los espacios en blanco son considerados parte de la cadena de texto
console.log(producto);
console.log(producto.length);

// * Eliminar del inicio..
console.log(producto.trimStart());
// * Eliminar del final..
console.log(producto.trimEnd());
// * Mostrará la nueva longitud de la cadena cortada.
console.log(producto.trimEnd().length);

// * En JavaScript se pueden crear o llamar los métodos de forma encadenada,
// * es lo que se conoce como chaining
// Se podría decir que esto se puede hacer solo con los métodos de ese Objeto, en este caso
// solo se le podrán encadenar métodos propios del objeto.
console.log(producto.trimStart().trimEnd());
// Mostrará la cadena si espacios y en un array partida por espacios
console.log(producto.trimStart().trimEnd().split(' '));

// ## Elimina espacios en ambas direcciones

console.log(producto.trim());
console.log(producto.trim().length);