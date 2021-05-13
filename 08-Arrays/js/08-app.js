
// # 53. Destructuring de Arrays


// ## Object literal
const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// ## Destructuring con Objetos.
const {nombre} = producto;

console.log(nombre);

// ## Destructuing con Arreglos.
const numeros = [10, 20, 30 ,40 ,50];

// ? En base a la posición del arreglo de lado izquierdo traeremos los
// ? valores del array.
const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);

// ? O bien, solo solicitando lo que queremos, como el tercer valor.
// ? y para omitir los dos primeros valores pues tenemos que dejar una , entre
// ? cada valor que queramos saltarnos const [ , , tercerElemento] = numeros;
// ? console.log(tercerElemento);

// ? O saltarnos el de en medio
const [primerElemento, , tercerElemento] = numeros;
console.log(primerElemento);
console.log(tercerElemento);

const [ , , , , quinto] = numeros;

console.log(quinto);

// * Ahora uno que contenga en variables los 2 primeros y los 3 últimos en un arreglo.
const [ pElemento, sElemento, ...tElemento ] = numeros;
// ? Aquí tendriamos un arreglo con los últimos 3 elementos del arreglo original.
console.log(tElemento);

// Por lo que a partir de la posición podemos tomar cualquier cantidad de elementos del arreglo
// y anteponiendo los 3 puntitos...