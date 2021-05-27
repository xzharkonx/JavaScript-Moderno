
// # 154. Veamos que es el Proto y crear un tip de objeto Nuevo.

// * Object Literal
// - Sintaxis más común.
// - Menos dinámica.
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

// - Dentro del objeto encontraremos algo llamado __proto__
// - Todos los objetos tienen este __proto__
// - Todo lo que va en ese proto son funciones exclusivas de ese tipo de objeto.


// * Object Constructor
// - Es un objeto reutilizable.

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const luis = new Cliente(`Luis`, 500);
console.log(luis);
console.log(typeof luis);

// * Ambos son object
// ? Obtenemos el nombre de la clase por medio del prototype.
console.log(Cliente.prototype.constructor.name);