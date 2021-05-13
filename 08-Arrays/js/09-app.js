
// # 54. .forEach para iterar un array

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

// ## Forma antigua de recorrer una arreglo
// for (let i = 0; i < carrito.length; i++){
//     console.log(`Nombre: ${carrito[i].nombre}, Precio: ${carrito[i].precio}`);
// }

// ## Otra forma de hacerlo con el método forEach
// Se crea una función la cual se invocará y está recibe una variable que será la que se sobreesciba
// para cada elemento del arreglo, así cada vez que se termine la función cambiará esa variable para
// el siguiente elemento.
carrito.forEach( function(p){
    console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}`);

});

// En una sola línea Crack...
carrito.forEach(p => console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}`));

// ### En solo 2 líneas modificamos el precio agregandole el IVA a está lista de Objetos
// ? Es en 2 líneas por que retornamos el objeto con return
// ? map se verá el la siguiente
// const carritoIVA = carrito.map( p => { p.precio = p.precio * 1.16 
//     return p });
// carritoIVA.forEach(p => console.log(`Nombre: ${p.nombre}, Precio: ${Math.ceil(p.precio)}`));

console.log('\n\n');

// * En solo 1 línea: Modificamos el precio agregandole el IVA a está lista de Objetos
// ### En una sola línea Crack... 
// ? Recoonstruimos el mismo objeto pero ahora tomará su valor del precio y lo múltiplicara. 
// ? para agregarle el IVA retornando así el mismo objeto creado para evitar el return.
// ? Al mostrarlo se redondea la parte decimal.

const carritoIVA2 = carrito.map(p => p = {nombre: p.nombre, precio: p.precio * 1.16});
carritoIVA2.forEach(p => console.log(`Nombre: ${p.nombre}, Precio: ${Math.ceil(p.precio)}`));


console.log('\n\n');
console.warn('\n Carrito 2 Modificación del precio en el mismo arreglo de Objetos.\n');
// ## Reconstruir el mismo carrito

// ! Lo declaramos como let para que pueda ser sobreescrito.
let carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

carrito2 = carrito2.map(p => p = {nombre: p.nombre, precio: p.precio * 1.16});
carrito2.forEach(p => console.log(`Nombre: ${p.nombre}, Precio: ${Math.ceil(p.precio)}`));