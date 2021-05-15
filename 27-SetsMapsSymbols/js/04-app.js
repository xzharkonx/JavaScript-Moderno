
// # 89. Que son los WeakMaps

// * WeakMap
// ? Sirven para mantener una serie de datos como privados.
// ? Solo se le pueden pasar o agregar Objetos.
// ? No son iterables.
// ? No se les puede conocer la longitud con .size


const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

// ! El WeakMap tiene mismos metodos del WeakSet

weakmap.set(producto, 'Monitor');

// * Comprobar si tiene una llave con .has()
// ? Si lo encuentra dará true si no dará false.
console.log(weakmap.has(producto)); // true

// * Comprobar si tiene un valor con .get()
// ? Si lo encuentra regresará el valor si no dará undefined.
console.log(weakmap.get(producto)); // Monitor

// Mira como es que el objeto se vuelve una clave y este objeto al
// ser una clave es como si ocultará sus atributos y su contenido.
// Sin embargo podemos verlo mostrando el WeakMap completo
console.log(weakmap);