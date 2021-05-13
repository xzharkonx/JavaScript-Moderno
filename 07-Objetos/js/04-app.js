
// # 36. Destructuring de Objetos.
// * Se verá como acceder a los valores del objeto y asignarlos a una variable.

// ## Object literal
const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Supongamos que queremos acceder al nombre.
console.log(producto.nombre)

// Ahora extraeremos el contenido de ese atributo del objeto en una variable.
// Pero esta era como la forma anterior de hacerla
const nombreObjeto = producto.nombre;
console.log(nombreObjeto);

// ## Destructuring
// * Con EcmaSript esto cambio, y tenemos algo que se conoce como Object Destruction.
// Es decir, extraer del objeto y crear la variable todo en un mismo paso.
// La variable nombre tiene que escribirse igual que al del atributo que extraeremos
// const {nombre} = producto;
// const {precio} = producto;
const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);




