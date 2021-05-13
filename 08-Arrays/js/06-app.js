
// # 51. Crear un nuevo arreglo con el spread operator.

// ? Usaremos la forma declarativa, es decir la que no modifica esta variable si no que
// ? crea una nueva y talvez la sintaxis no sea tan clara.

// ## Ejemplo de carrito de compras.

const carrito = [];

// ### Definir un producto

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}

// ! Agregaremos un tercer producto pero al inicio de la lista
const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// ! Objeto modificado.
const producto4 = {
    nombre: "Mouse Pro",
    precio: 800,
    marca: "patito"
}

// ## Unión de Arrays (Contenido de 2 en uno nuevo/otra-variable)
// ? El spread operator son los tres puntitos ... que lo que hacen es copiar una variable 
// ? en este caso copiamos el Array (el contenido, más no la unión del array en sí).
// ! Cabe notar que solo aplica en los Arrays, cuando lo hacemos de esta forma.

// Le decimos que copiaremos la variable carrito y que también estamos agregando el producto
// es decir, objetos
let resultado = [...carrito, producto];

// hacemos una copia de ese resutado y le pasamos el producto2
resultado = [...resultado, producto2];
// ! También podemos agregar producto3 al principio.
resultado = [producto3, ...resultado];

console.table(resultado);

// ## Unión de Objetos (Contenido de 2 en uno nuevo/otra-variable)
// ? Para no confundir con los objetos, estos se unen así (solo el contenido, por que si no
// ? se haría como un Array de objetos y no del contenido).
// ! Mira que en el caso de los objetos, solo únira aquellos atributos diferentes y los que
// ! se repitan se sobreescribirán con el valor repetido del atributo del último objeto agregado.

const resultado2 = {...producto, ...producto4}
console.log(resultado2);