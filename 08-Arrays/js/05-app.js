
// # 50. Añadir nuevos elementos al Fin o Inicio de un Array.

const meses = ['Enero', 'Febrero', 'Marzo'];
// meses[3] = 'Abril';

// * Tenemos métodos para agregar al principio o al final del arreglo sin conocer 
// * la extensión del arreglo.

// ## push()
// ? Agregar al final del arreglo.
meses.push('Abril');
meses.push('Mayo');

console.table(meses);

// ## Ejemplo de carrito de compras

const carrito = [];

// * Definir un producto

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

// ## unshift()
// ? Agregaremos un tercer producto pero al inicio de la lista

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// ? lo agregaremos con el método de unshift
carrito.unshift(producto3);
// ? Eliminar el primer elemento con el método de shift
// carrito.shift(producto3);


console.table(carrito);