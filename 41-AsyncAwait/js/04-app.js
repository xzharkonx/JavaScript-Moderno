
// # 264. Como manejar múltiples awaits

// ? - Veremos como consumir o utilizar 2 Promises, es decir, hacer 2
// ?   consultas a una API o consumir 2 endpoint de una forma muy eficiente.

// ? Supongamos que tenemos un CRM. Que nos logueamos y vamos a descargar los nuevos
// ? clientes para poderlos administrar

function descargarNuevosClientes() {

    // ! Vamos a retornar una promesa
    // ? Solamente va a tener resolve
    return new Promise((resolve) => {
        console.log(`Descargando clientes...`);

        setTimeout(() => {
            resolve(`Los clientes fueron descargados`);
        }, 5000);
    })

}

// ? - Agregando un nuevo promise

function descargarNuevosPedidos() {

    // ! Vamos a retornar una promesa
    // ? Solamente va a tener resolve
    return new Promise((resolve) => {
        console.log(`Descargando perdidos...`);

        setTimeout(() => {
            resolve(`Los pedidos fueron descargados`);
        }, 3000);
    })

}

// ? - Pregunta para obtener un trabajo.
// ? - Algo que se sirve saber para toda tu vida como programador web
// ?   en el que muchas veces las aplicaciones corren un poco lento y las
// ?   las personas dicen porque corre lento y es porque usualmente
// ?   se esta haciendo mal

// * Hacemos que nuestra app principal sea asincrona colocandole async
const app = async () => {

        try {
            
            // ## 1ra forma: Ejecutando 2 endPoints sincronizados.
            // ? Mira como es que creamos 2 endpoints donde consultamos 
            // ? datos se ejecutarán uno tras otro de manera sincrona.

            // const clientes = await descargarNuevosClientes();
            // ? Al terminar se mostrarán los datos.
            // console.log(clientes);
            
            // const pedidos = await descargarNuevosPedidos();
            // ? Al terminar se mostrarán los datos.
            // console.log(pedidos);

            // * Esta es una forma sincronizada de hacerlo, en algunas 
            // * ocaciones eso esta bien.
            // ? Porque aquí son consultas independientes.
            
            // * Aunque en algunas ocaciones quieres tener listo algunos 
            // * resultados para hacer la consulta en otros.
            // ! Pero con esta forma el problema es que, bloquea la 
            // ! descarga de la segunda el tiempo que tarda la primera.

            // ## 2da Forma: Sincrona de 2 endPoints.

            // * Utilizaremos Promise.all()
            // ? Este va a tomar un arreglo de diferentes promises que 
            // ? quieres ejecutar.
            
            // ? Con esta técnica van a ejecutarse las 2 funciones al mismo
            // ? tiempo, porque no tiene nada que ver una con otra.
            // ? Vas a ganar mucho performance en tus aplicaciones.
            const respuesta = await Promise.all([descargarNuevosClientes(),
                descargarNuevosPedidos()]);
            
            // * Nota como las 2 promesas arrancan al mismo tiempo.    
            // * Nota como nos arroja ambas respuestas inmediatamente 
            // *    (aunque depende de la función).
            // * Nota como las respuestas vienen en un array.
            console.log(respuesta);
            console.log(respuesta[0]);
            console.log(respuesta[1]);


            
            } catch (error) {
            
            // !! En caso de que ocurra algún error
            console.log(error);
        }
}

app();

// * Consejos al utilizar múltiples awaits en consultas.
// ? - Utiliza esta sintaxis cuando tengas 2 o más funciones que sean
// ?   independientes, es decir, que no requiera el resultado de una 
// ?   consulta previa para realizarse. 
// ? - En caso contrario utiliza la primera sintaxis.