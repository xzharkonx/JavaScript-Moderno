
// # 283. Funciones que retornan funciones

// ? Esta sintaxis no es tan común.
// ! Tal vez en documentaciones y librerias.
const obtenerCliente = () => () => console.log('Luis Eduardo');

// * Aquí obtenemos la primera función.
const fn = obtenerCliente();

// * Aquí obtenemos la segunda función.
// ? Por tener otra función debemos de llamar a esa 
// ? función para ejecutar la siguiente parte
fn();

