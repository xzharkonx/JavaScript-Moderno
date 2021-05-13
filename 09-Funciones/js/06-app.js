
// # 61. Parametros por default

// * Podemos igualarle algo al parametro de la función para que tome ese valor por defecto.
function saludar(nombre = 'Desconocido', apellido = 'No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`);
}

// ? Mira como ya no dará undefined más que lo que le definimos en los parametros de la función
saludar('Luis E.', 'Garcia Mercado');
// ? Empezamos a quitar argumentos, ya no nos dará undefined en los valores que falten.
saludar('Luis E.');
saludar();