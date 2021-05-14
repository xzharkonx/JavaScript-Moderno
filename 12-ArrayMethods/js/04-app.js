
// # 89. .filter

// ? Va a crearnos un nuevo arreglo basado en el parametro que es evaluado.
// ? Nor permite hacer muchas busquedas mediante operaciones sobre nuestros arreglos
// ? Nos va traer 1 o más elementos que sean filtrados

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Audifonos', precio: 500 }, // ! Agregue este y si lo agrega (como si lo catalogara).
];

// ? Digamos que queremos traernos todos los productos que cuesten más de 400 en nuestro carrito.

let resultado = carrito.filter( producto => producto.precio > 400);
resultado.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`) );
// console.log(resultado);

console.log("\n");

// * Productos con el precio menor a 600
let resultado2 = carrito.filter( producto => producto.precio < 600);
resultado2.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`) );

console.log("\n");

// ? Supongamos que queremos traernos todo "menos los Audifonos"

resultado3 = carrito.filter( producto => producto.nombre !== 'Audifonos');
resultado3.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`) );

// ? Supongamos que queremos traernos todo "menos los Audifonos" y "el celular"

resultado3 = carrito.filter( producto => producto.nombre !== 'Audifonos' && producto.nombre !== 'Celular');
resultado3.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`) );

console.log("\n");

// ? Supongamos que queremos traernos solo los Audifonos"

resultado3 = carrito.filter( producto => producto.nombre === 'Audifonos');
resultado3.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`) );

console.log("\n");

// ? Todos los productos que empiecen su nombre con T

const resultado4 = carrito.filter(p => p.nombre[0] == 'T');

console.log("\n");

// ## filter Anidado: .filter().filter()
// * Todos los productos que empiecen su nombre con T y su precio sea menor a 300.

const resultado5 = carrito.filter(p => p.nombre[0] == 'T').filter(p => p.precio < 300);
resultado4.forEach(p => console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`));