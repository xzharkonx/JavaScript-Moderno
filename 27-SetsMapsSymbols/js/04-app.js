
// # 89. Que son los WeakMaps

// * WeakMap
// ? Sirven para mantener una serie de datos como privados.
// ? Solo se le pueden pasar o agregar Objetos.
// ? No son iterables.
// ? No se les puede conocer la longitud con .size


const producto = {
    idProducto : 10
}

// Si se crea un nuevo objeto este será diferente.
// const productoHackeado = {
//     idProducto : 10
// }

// El objeto tiene que igualarse para que tenga la misma instancia.
const productoHackeado = producto;

const weakmap = new WeakMap();

// ! El WeakMap tiene mismos metodos del WeakSet

weakmap.set(producto, 'Monitor');

// * Comprobar si tiene una llave con .has()
// ? Si lo encuentra dará true si no dará false.
console.log(weakmap.has(producto)); // true

// * Comprobar si tiene un valor con .get()
// ? Si lo encuentra regresará el valor si no dará undefined.
console.log(weakmap.get(producto)); // Monitor

// Para que funcione debe ser de la mimsma instancia del objeto
// y no uno nuevo con los mismos atributos.
console.log(weakmap.get(productoHackeado)); // MonitorHackeado

// Mira como es que el objeto se vuelve una clave y este objeto al
// ser una clave es como si ocultará sus atributos y su contenido.
// Sin embargo podemos verlo mostrando el WeakMap completo
console.log(weakmap);

//!! No se puede ver el tamaño, no sirve
console.log(weakmap.size); // undefined

// Eliminamos el objeto y valor.
console.log(weakmap.delete(producto)); // true
