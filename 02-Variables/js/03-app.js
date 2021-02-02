// La primer diferiencia con las variables de tipo const

// Es que no puede ser reasinado.
// Las variables con const se deben de inicializar con algún valor.

// Si no conoces el valor o el valor va a cambiar es mejor utilizar let.



const producto = "Tablet";
// producto = "Monitor"; // Si la reasignamos nos saldrá un error de que 
// una constante no se puede reasignar

console.log(producto);

// Si lo hacemos de está forma dará error
// const precio;
// console.log(precio);

// Así ya no dará error.
const precio = 20;
console.log(precio);