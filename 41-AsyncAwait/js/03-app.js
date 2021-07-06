
// # 263. Asycn Await en function express y Declaration

// * Vamos a disimular que estamos descargando registros de una API.

function descargarClientes(){
    
    // ? En las promesas (promise) recuerda lo siguiente.
    // * - resolve: es cuando se cumple la promesa.
    // !! - reject: es cuando se no cumple la promesa.

    // ! Vamos a retornar una promesa
    return new Promise((resolve, reject) => {

        const error = false;

        // ! Simulamos que retrasamos la ejecución
        setTimeout(() => {
            if(!error) {
                resolve(`El listado de clientes se descargo correctamente`);
            } else {
                reject(`Error en la conexión`);
            }
        }, 3000);

    })
}

// * Con function declaration
// ? Ejemplo de function declaration con Async Await:
// async function ejecutar(){}

//  * Con function expresión
//  ? Ejemplo de function expresion
// const dato = () => {}


// ## function epresion Async Await
// ? async se coloca antes del parentesis y recuerda que va en la función padre.
const ejecutar = async () => {

    try {

        // Probando a ejecutar esto primero
        console.log(1+1);
        
        // * Vamos a intentar descargar los clientes
        // ? Recuerda que en las Promises al invocarlas teniamos que poner .then
        // ? en el caso de Asycn Await es diferente porque en lugar de tener .then
        // ? y en el arrow function accedamos al valor.
        // ! En el caso de Async Await ese valor se almacena en una nueva variable
        // ! de la siguiente forma:

        const respuesta = await descargarClientes()

        // * Entonces ese es un Async Await pero mira que en ningun lado de la función dice async
        // ? async: Tiene que ser la función, es decir la función padre sobre la cuál se está
        // ? ejecutando el promise. En este caso la función padre es la de ejecutar()
        // ! Por lo tanto esa lleva el async

        // ? await: Se utiliza digamos en la parque te va a esperar a que se ejecute el promise
        // ! Por lo que puede ir antepuesta de donde se ejecuta el promise.
        
        // * Que es lo que hace el await
        // ? Lo que hace es que, primero si se manda a llamar la función de descargarClientes()
        // ? pero JS dice, bueno voy a esperar a que finalize está función, por lo que se detiene
        // ? la ejecución del código por esperar a que se ejecute esa función (que durará 3 segundos).

        // ? Por lo que la siguiente línea no se podrá ejecutar inmediatamente porque estamos deteniendo
        // ? la ejecución con async await, además de que espera a que se ejecute completamente.

        console.log(2+2);
        console.log(respuesta);

    } catch (error) {
        
        // !! En caso de error, se mostrará el mensaje de error del reject
        console.log(error);

    }
}

ejecutar();

// * Utiliza Async Await en:
// ? - Descargas de datos.
// ? - Funciones importantes que se tengan que cumplir primero.
// ? - Para la asincronia de procesos.
