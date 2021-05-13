
// # 55. .map para iterar un Array, y sus diferiencias con forEach

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

// ? El método .map es parecido al del .forEach
// ? La diferiencia es que map te crea un arreglo nuevo, pero está llenará una variable con
// ? ese arreglo nuevoArreglo.

const nuevoArreglo = carrito.map( function(p){
    return `Nombre: ${p.nombre}, Precio: ${p.precio}`;

});

const nuevoArreglo2 = carrito.forEach( function(p){
    return `Nombre: ${p.nombre}, Precio: ${p.precio}`;

});

// ? Nos retorna en una nueva variable todo el arreglo, además de que este podremos modificarlo
// ? y de esta forma también conservar el original.
console.log(nuevoArreglo);
// !! El segundo del forEach no va a tener nada
console.log(nuevoArreglo2);