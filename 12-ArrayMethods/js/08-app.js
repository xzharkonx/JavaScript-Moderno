
// # 93. Spread Operator
// ? Está forma no modifica al arreglo original.
// ? Tomará solo el contenido del Array.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// ! Para probar con una variable de tipo let
let mesesPruebaLet = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.log(meses);

// * Ahora si modificaremos el arreglo original
meses.push('Agosto');
// console.log(meses);

// ## spread operator con arreglo de indices

// ! Creamos una nueva variable pero ahora con let y mirá como si le agrega el valor.
mesesPruebaLet.push('Agosto');
mesesPruebaLet = [...mesesPruebaLet, 'Septiembre']; // Si la reasignamos al original dará error.

// ? Añadimos el siguiente mes, se creará un nuevo arreglo.
const meses2 = [...meses, 'Septiembre'];
console.log(meses);
console.log(mesesPruebaLet);
console.log('\n');
console.log(meses2);



const producto = { producto : 'Discoduro', precio : 300};

// ? Para unirlo a la lista de los objetos del carrito, solo hay que tomar la lista y colocarle el 
// ? spread operator, esto colocará el el nuevo arreglo carrito2 todos los valores que serán 
// ? un listado de objetos de la lista carrito  una vez ques se extrajeron todos los objetos
// ? solo habrá hacer falta colocarle uno más, en este caso el nuevo objeto que creamos.

const carrito2 = [...carrito, producto];
console.log(carrito2);
console.log(carrito2[6].nombre);

