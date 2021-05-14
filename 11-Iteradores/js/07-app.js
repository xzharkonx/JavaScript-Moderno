
// #  84. for ...of

// ? Esta es otra versión del for pero un poco más simplificada.
// ! Este itera sobre arreglos.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
];


// ? Lo que hace este for es que cada ciclo va a asignar un valor del arreglo 
// ? pendientes a la variable pendiente.
// * Nos da los valores del arreglo.

for (let pendiente of pendientes){
    console.log(pendiente);    
}
for (let producto of carrito){
    console.log(producto);    
    console.log(producto.nombre);    
}