
// # 279. Separar datos de las funciones

// * Veremos lo que son las High Order Functions
// ? - Es un término muy común en la programación funcional.
// ? - Es una función que toma o retorna una función como argumento.

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

// const resultado = carrito.filter(producto => producto.precio >= 400);
// console.log(resultado);

// ? Por lo tanto podríamos llevar esto a High Order función

// ? Esta es una función que podremos utilizar
const mayor400 = producto => {
    return producto.precio >= 400;
}

// * .filter(fn) sería una High Order Function
// ? Entonces filter tomaria una función.
const resultado = carrito.filter(mayor400);
// Mostraria los mismos resultados
console.log(resultado);

// ? En este ejemplo podemos ver que no estamos modificando el carrito.
// ! en resultado se crea un nuevo arreglo que se genera con .filter().