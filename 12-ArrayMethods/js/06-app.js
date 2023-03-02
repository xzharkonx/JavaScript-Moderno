
// # 91. .every
// ? Es un poco extraño ya que todos los elementos de un arreglo deben de cumplir esa condición
// ? para que nos retorne un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// * El método .every (AND)
// ? Vamos a ver si es verdad que el precio de todos los productos es menor a mil-
// ? Si cumple que todos los elementos y solo si todos tienen precio menor a 1000 devuelve true.
const resultado = carrito.every( producto => producto.precio < 1000);

// ? Vamos a ver si es falso que el precio de todos los productos es menor a 500
const resultado2 = carrito.every( producto => producto.precio < 500);
console.log(resultado);
console.log(resultado2);

// ## El método .some (OR)
// ? Revisa que si por lo menos uno cumple la condición,
// ? si alguno de los elementos tiene precio menor a 500 devuelve true.
const resultado3 = carrito.some( producto => producto.precio < 500);
console.log(resultado3);