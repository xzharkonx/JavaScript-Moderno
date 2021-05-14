
// # 88. .reduce

// ? Aplica lo que se conoce como una función reducer, (una función reductora).
// ? Básicamente es tomar una gran cantidad de datos, unirlos y entregarte un resultado.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// * Imaginemos que ese es nuestro carrito de compras y queremos decirle al usuario
// * cuanto tenemos que pagar.

// ### Con un foreach

let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// ### Otra forma es con un reduce (aunque es algo diferente).

// ? Se le pasan 2 valores, uno es el valor anterior, es decir, cuando inicia, 
// ? inicia con el valor de 0 pero ya que suma el primer valor en la siguiente 
// ? iteración tenemos que ir acumulando sobre ese valor, por lo tanto ese sería 
// ? el valor previo que sería el "total = 0"

// ? El segundo valor sería el valor actual "producto".

// ! Nota: como solo lleva el valor de + y no el de += por que solo se especifica 
// ! únicamente la suma.

// ? Por último podemos agregar un valor por defecto de inicio, en nuestro caso lo 
// ? dejaremos en 0. Pero también este definirá el tipo de dato, así que en vez de 
// ? 0 puede ser un String o un array[] o incluso un objeto.

let resultado = carrito.reduce((total2,producto) => total2 + producto.precio, 0);

// ! También se puede de la manera tradicional:
// let resultado = carrito.reduce((total2,producto) => total2 += producto.precio, 0);

console.log(resultado);

// * Es como si te dieran una variable "resultado2" con la cuál trabajar, y luego el 
// * de "producto" que es el objeto o lista con la cuál trabajar.

// ? Entonces al otro lado de la flecha podemos indicar que sumará el valor de nuestra 
// ? variable "total2" con el "valor del precio del objeto en turno de la 
// ? lista (producto.precio)" y además podemos asignar un parametro con un valor incial
// ? a nuestra variable de "total2"

// * En conclusión, nos facilita una variable de "cualquier valor que definamos en el tercer 
// * parametro del parentesis" con la cuál trabajar, al final se retornará esa variable.


// ### Obtener una lista de solo los nombres de la lista de objetos del carrito.

// ! Nota: se debe especificar el Array como segundo parametro, si no dará error.
// ? Recuerda. El primer parametro es el del array y el segundo parametro es que elemento 
// ? que irá iterando en la litsta del carito que están en la función flecha.

let lista = carrito.reduce((listanombres,producto) => listanombres = [...listanombres, producto.nombre] , []);
lista.forEach(e => console.log(e));
console.log("\n---------------------------------------\n");

// ! También se puede hacer con un map, pero digamos que con reduce te da más libertad 
// ! de hacer cosas con el array.

let lista2 = carrito.map(producto => producto.nombre);
lista2.forEach(e => console.log(e));
