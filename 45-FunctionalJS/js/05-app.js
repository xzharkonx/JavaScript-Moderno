
// # 281. Menos cantidad de código en tus Funciones.

// ? En la programación funcional también se busca tener
// ? un código que sea  más corto.

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// ## Usando Arrow Funcions podemos hacerlo más corto.
// ### Tomamos el ejemplo de 04-app.js

// * Supongamos que queremos crear un nuevo arreglo 
// * basado en el mismo arreglo que tenemos pero que 
// * solamente nos liste los nombres de los productos.

// ! Aquí lo hacemos más corto
// const obtenerNombres = producto => producto.nombre;
// ? Variable a modo de alias producto as p.
const obtenerNombres = p => p.nombre;

// * Esto nos creará un arreglo nuevo con nombres
const resultado = carrito.map(obtenerNombres);
console.log(resultado);


// ### Tomamos el ejemplo de 03-app.js

// ? Esta es una función que podremos utilizar
// ! Mira que redujimos está función
const mayor400 = p => p.precio >= 400;
const resultado2 = carrito.filter(mayor400);
console.log(resultado2);
