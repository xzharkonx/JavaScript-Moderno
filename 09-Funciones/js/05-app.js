
// # 60. Parametros y Argumentos en Funciones

function sumar(a, b){ // a y b son parametros
    console.log( a + b );
}

sumar(2, 3); // 2 y  3 son argumentos
sumar(200, 184); // 2 y  3 son argumentos

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Luis E.', 'Garcia Mercado');
saludar('Luis E.'); // undefined | Dará un undefined por cada parametro que haga falta.
saludar(); // undefined undefined | Dará un undefined por cada parametro que haga falta.

// ! Para solventar esto se podrían usar los parametros por defecto.

