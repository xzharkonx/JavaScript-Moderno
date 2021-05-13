
// # 52. Eliminar elementos con Splice


// ## Ejemplo de carrito de compras

const carrito = [];

// ### Definir un producto

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);

// ! Agregaremos un tercer producto pero al inicio de la lista
const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// ### Agregamos un producto más

const producto4 = {
    nombre: "Celular 2",
    precio: 100
}

// ! lo agregaremos con el método de unshift
carrito.unshift(producto3);


console.table(carrito);

// ## Eliminación de elementos de un arreglo. -------------------------------------------------

// * Eliminar último elemento de un arreglo. 
// carrito.pop();
// console.table(carrito);


// * Eliminar del inicio del arreglo.
// carrito.shift();
// console.table(carrito);


// * Eliminar elementos desde el medio o desde la posición que indiquemos del arreglo.
// ? con el método splice, toma 2 parámetros, el primero es la posición desde donde inicia 
// ? para empezar a cortar y cuandos elementos quieres eliminar.
// ! Desde la posición 1 eliminame 1 elemento o 2 o los que quiera

// * Un elemento
// carrito.splice(1,1);

// * Dos elementos
// carrito.splice(1,2);

// * Tres elementos
// carrito.splice(1,3);


console.table(carrito);