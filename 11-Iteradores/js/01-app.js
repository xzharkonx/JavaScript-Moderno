
// # 78. For Loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`Número: ${i}`);
// }

// * Encontrar pares e impares de números

// for (let i = 0; i <= 20; i++) {

//     if (i%2 == 0)
//         console.log(`Número Par: ${i}`);
//     if (i%2 != 0)
//         console.log(`Número Impar: ${i}`);
// }



const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

console.log(carrito.length);



// ## Forma de paradigma explicita

for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre );
    
}

for(let i in carrito){
    console.log(carrito[i].precio);
}

// ## Forma de paradigma funcional
carrito.forEach(producto => console.log(`Nombre del Producto: ${producto.nombre}, Precio: ${producto.precio}`));