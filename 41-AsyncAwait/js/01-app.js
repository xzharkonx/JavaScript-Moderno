
// # 261. Pero primero, que es Try Catch ?

// ? se utiliza mucho try catch con Async Await

console.log(1+2);

// ! Aquí vemos una función que no está definida.
// !! Por lo que dara error al correr.
// ? Cuando el codigo falla tiende a detenerse
// hola();

// * Entonces lo solucionaremos con trycatch
// ? Nos ayudará a prevenir la detención de la ejecución,
// ? por lo que toda lógica ira dentro de try luego
// ? cuando encuentre un error, podemos indicarle que hacer
// ? dentro del bloque catch.
// ? Finalmente en el bloque finally podemos colocar algo adicional
// ? o calgo común podría utilizarse para cerrar una conexión de bd.

// ! Solo utilizalo en partes criticas de tu aplicación
// ? - Puede ser conectar una base de datos.
// ? - Consultar una API.
// ? - Autenticar un usuario.
// ? - Junto a Async Await.
// ? - O acciones que en caso de que falle le permitan a nuestra aplicación
// ?   continuar funcinando, pero que también podamos obtener un mensaje de eror.

try {
    
    hola();

} catch (error) {
    
    // Mostrando el error
    console.log(error);
}
finally {
    console.log("Hola mundo");
}


console.log(2+2);
