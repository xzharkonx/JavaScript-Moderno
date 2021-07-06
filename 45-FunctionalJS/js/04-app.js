
// # 280. .map es muy utilizado en Functional JS.

// ? La mayoria de los array methods son buenos 
// ? candidatos para ser utilizados en la 
// ? programación funcional.

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

// * Supongamos que queremos crear un nuevo arreglo 
// * basado en el mismo arreglo que tenemos pero que 
// * solamente nos liste los nombres de los productos.

const obtenerNombres = producto => {
    return producto.nombre;
}

// * Esto nos creará un arreglo nuevo con nombres
const resultado = carrito.map(obtenerNombres);
console.log(resultado);

// ! Carrito sigue sin ser modificado (caracteristica
// ! de la programación funcional).
console.log(resultado);