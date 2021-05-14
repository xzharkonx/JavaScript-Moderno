
// # 83. .foreach y .map
// ? .foreach no devuelve valor.
// ? .map si devuelve valor.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'estudiar JavaScript'];

// ## .forEach

// pendientes.forEach( (pendiente) => {
//     console.log(pendiente);
// });

// pendientes.forEach( pendiente => console.log(pendiente));


pendientes.forEach( (pendiente, indice) => {
    console.log(indice, pendiente);
});

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
];


console.log(`\n`);
// carrito.forEach( producto => console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio} `));
carrito.forEach( (producto, indice) => console.log(indice, producto.nombre, producto.precio));
console.log(`\n`);



// ## .map
// ! Sin devolver nuevo arreglo
// carrito.map( (producto, indice) => console.log(indice, producto.nombre, producto.precio));
const nuevoArreglo = carrito.map( (producto, indice) => console.log(indice, producto.nombre, producto.precio));
// !! No devolverá nada, porque solo se ejecuta el console.log
console.log(nuevoArreglo);

// ! Con devolver nuevoArreglo
const nuevoArreglo2 = carrito.map( (producto, indice) => `${indice}, ${producto.nombre}, ${producto.precio}`);
// ? Este si devolverá un String en cada posición con los valores que le dimos.
console.log(nuevoArreglo2);