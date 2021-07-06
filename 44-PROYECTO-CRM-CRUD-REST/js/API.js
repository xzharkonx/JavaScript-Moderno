// # Estructura de JSON

// ? Esta es la estructura que requieres para crear una app 
// ? utilizando JSON Server.

// ? Este archivo JSON va a actuar como la base de datos.

// ? JSON Server si te permite simular la creación de una API
// ? en 5 min o menos pero no es digamos algo que puedas utilizar
// ? en un proyecto muy grande.

// ? Es más bien para practicar e ir creando los "EndPoints" de
// ? una API.


// # Como agregar datos
// ? Un nuevo cliente (dato de información de nuestra db).
// ! Documentación: https://github.com/typicode/json-server/#plural-routes

// Para ello es muy útil utilizar una rest app.
// Hoy en día hay tecnologías como Group Gold que han ganado un poco
// de terreno sobre las rest APIs, pero muchas veces una rest APIs
// sigue siendo una forma organizada de realizar las cosas, también 
// no le agrega complejidad que si tiene Group Gold.

// * JSON Server ya soporta todos los verbos de http.
// ? Por ejemplo: 
// ? GET para obtener registros.
// ? POST para enviar registros nuevos al servidor.
// ? PUT o PATCH para actualizar los datos.
// ? DELETE se utiliza para eliminar.

// * JSON Server automáticamente agrega todos estos verbos
// * hacia las siguientes URLS
// ? GET /posts
// ? GET /posts/1
// ? POST /posts
// ? PUT /posts/1
// ? PATCH /posts/1
// ? DELETE /posts/1

// ! Es por eso que es una excelente herramienta para aprender rest APIs.

// * Nuestra API va a reaccionar hacia /clientes por cualquiera de los métodos de envio.


const url =  `http://localhost:4000/clientes`;

// * Le indicamos que sea asincrona 
export const nuevoCliente = async cliente => {
    
    // Mostramos el cliente
    // console.log(cliente);

    try {
        
        // ? fetch por default ejecuta el método de get del servidor.
        // ? En este caso nosotros estamos creando un nuevo cliente.
        // ? Cuando creas un nuevo cliente se utiliza POST.
        // ? Por lo que crearemos y le pasaremos un Objeto 
        // ? de configuración a fetch.
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ), // ? Este body se envia de Obj a tipo String.
            headers: {// ? Información de que tipo de dato estamos enviando.
                
                // ? Este header varia dependiendo a lo qe se esta enviando.
                'Content-Type': 'application/json' 

                // ? Para uno con archivos sería de diferente forma.

            } 
        });

        // * Vamos a enviar el usuario hacia inicio
        window.location.href = 'index.html';

    } catch (error) {
        
        // !! En caso de error, muestralo
        console.log(error);
    }

}

// # Obtener todos los clientes
export const obtenerClientes = async () => {

    try {
        
        // ? Los principios de Rest nos dicen que cuando
        // ? queremos obtener todos los registros envía un get
        const resultado = await fetch(url); 
        // ? Este requiere que el primero sea cumplido para mostrar la info.
        const clientes = await resultado.json(); 
        return clientes;    

    } catch (error) {
        
        // !! En caso de Error, muestralo
        console.log(error);
    }

}

// # Eliminar un cliente
export const eliminarCliente = async id => {

    
    try {
        
        // ? Inyectamos el id en la url
        // ? http://localhost:4000/clientes/id
    
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
    
        })

    } catch (error) {
        
        // !! En caso de error, muestralo.
        console.log(error);
    }
}

// # Obtener cliente por su ID
export const obtenerCliente = async id => {

    try {
        
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        
        // !! En caso de Error, muestralo.
        console.log(error);

    }
}

// # Actualizar un registro de cliente

export const editarCliente = async cliente => {

    try {

        // * Modificamos los datos por medio del id del cliente
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // * Redireccionamos al inicio.
        window.location.href = 'index.html';
        
    } catch (error) {
        
        // !! En caso de Error, muestralo.
        console.log(error);

    }
}