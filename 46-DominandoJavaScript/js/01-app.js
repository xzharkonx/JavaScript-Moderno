
// # 287. Scope

// ? El Scope es el alcance de una variable.

// * Existen 2 tipos de Scope.
// - Scope de una Función Global.
// - Scope en una Función en un bloque de codigo.

// * Scope Global
const cliente = 'Luis';

function mostrarCliente(){
    const cliente = 'Eduardo';
    console.log(cliente); // Eduardo
}
console.log(cliente); // Luis

mostrarCliente();