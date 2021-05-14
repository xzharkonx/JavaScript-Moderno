
// # 79. break y continue; en un for loop
// * brake: Detiene el ciclo.
// * continue: Salta todo lo que este debajo del continue y continua a la siguiente iteración.

for (let i = 0; i <= 10; i++) {
 
    // ## break
    // if (i === 5){
    //     console.log('Este es el 5');
    //     break;
    // }

    // ## continue
    if (i === 5){
        console.log('CINCO');
        continue;
    }
    console.log(`Número: ${i}`);
}

console.log("\n\n");

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento){
        carrito[i].precio = (carrito[i].precio - carrito[i].precio*0.20)
        console.log(`El articulo ${carrito[i].nombre} tiene un precio con descuento: ${carrito[i].precio}`)
        continue;
    }
    console.log(carrito[i].nombre);
}