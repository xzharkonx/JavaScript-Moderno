
// # 288. Hoisting

// ? Es un término que se utiliza en JavaScript para
// ? referirse a como funcionan los contextos de 
// ? ejecución en JS.


// * Existen 2 fases.
// ? Tu codigo de JS se ejecuta en 2 partes
// - Fase de creación:
// -- Se crean/registran todas las variables, funciones.
// - Fase de ejecución:
// -- Se ejecutan todas las variables funciones.



// * Diferiencia de Function Expresion y Function Declaration.

// - Function Declaration.
// ? Puede ejecutarse arriba y abajo.
// ! Por el modo de ejecución del Hoisting no nos da error.

obtenerCliente('Luis');

function obtenerCliente(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente('Luis');


// - Function Expresion.
// ? Puede ejecutarse solo despues de la declaración.
// !! Si nos da error si la ejecutamos antes del Hoisting.

const getClient = nombre => console.log(`El nombre del cliente es ${nombre}`);

getClient('Eduardo');