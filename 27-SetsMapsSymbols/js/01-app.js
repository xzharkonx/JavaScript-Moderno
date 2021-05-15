
// # 186. Sets y sus Características.

// ? - Un set te va a permitir crear una lista de valores sin duplicados.
// ? - Cuando se maneja un volumen grande de datos tiende a ser más rápido que
// ?      un objeto o que un arreglo.
// ? - Son iterables.
// ? - Se le puede pasar cualquier valor.

const carrito = new Set();

console.log(carrito);

// * Limpia el Set
carrito.clear();

// * Agregar un elemento al Set
// carrito.add();

// Ejemplo:
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); 
// Pero no deben de haber valores repetidos. 
// Por lo que esta de arriba 'Camisa' no será agregada al Set.

// * Eliminar un elemento del Set con .delete
// carrito.delete('Disco #3'); 

// ? Se puede eliminar así, o:
// ? Si lo elimina dará true si no dará false.

console.log(carrito.delete('Disco #3'));


// * Saber la longitud del Set con: .size
console.log(carrito.size);

// * Comprobar si tiene un valor con .has()
// ? Si lo encuentra dará true si no dará false.
console.log(carrito.has('Camisa')); // * true
console.log(carrito.has('Guitarra')); // !! false

// * Los Set son iterables
carrito.forEach(producto => console.log(producto));

// ## Otras propiedades
// ? index: el indice del set (que sería el mismo valor).
// ? pertenece: el set completo como valor.

// carrito.forEach((producto, index, pertenece) => {
//     console.log(producto);
//     console.log(index);
//     console.log(pertenece);
// });


// * Del siguiente arreglo, eliminar los duplicados.
// ? En automático se eliminaran
const numeros = [10,20,30,40,50,10,20];
const noDuplicados = new Set(numeros);
console.log(numeros);
console.log(noDuplicados);