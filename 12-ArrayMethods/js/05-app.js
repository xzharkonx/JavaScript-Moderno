
// # 90. .find
// * con .find encuentras solo un elementos buscado.
// ? Algo muy importante es que solo nos retornará el primer elemento y no todos los elementos 
// ? por si alguno de ellos está repetido.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado = '';

// * Verificar si existe la Tablet con un foreach

// Múltiples líneas (más simple)
// carrito.forEach((producto, index) => {
//     if (producto.nombre === 'Tablet') {
//         resultado = carrito[index]; 
//     }
// });

// ? En una sola línea
// ! se deja al final del if doble comilla para que cuando entre a la condición de si no,
// ! que no haga nada ? : ''
carrito.forEach((producto, index) => producto.nombre === 'Tablet' ? resultado = carrito[index] : '' );
console.log(resultado);


// * Con .find encuentras solo un elementos buscado.
// ? Algo muy importante es que solo nos retornará el primer elemento 
// ? y no todos los elementos por si alguno de ellos está repetido
const resultado2 = carrito.find(producto => producto.precio === 100);
console.log(resultado2);

// ! Si queremos traer todos los que son iguales, tendríamos que usar la función de .filter