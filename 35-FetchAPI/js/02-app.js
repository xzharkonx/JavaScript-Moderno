
// # 229. Consultar un JSON

// * JSON: Se conoce como una tecnología de transporte.

// ? Digamos que tu tienes diversos proyectos en multiples sistemas de 
// ? diferentes lenguajes y consultas una base de datos para mostrar
// ? algunos clientes y quieres agregar algo de JavaScript, lo ideal
// ? sería que la respuesta no se imprima con las funciones
// ? que tienen esas tecnologías, si no más bien ves una respuesta
// ? como JSON para que la puedas consumir.

// * JavaScript se lleva bien con JSON.

// ? Se utiliza este lenguaje de transporte para poder comunicar
// ? un backend hecho en Java con un FrontEnd hecho en JavaScript

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    const url = 'data/empleado.json';
    // fetch(url)
    //     .then( respuesta => {
    //         console.log(respuesta);

    //         // Ahora le decimos que nos restorne los datos de ese archivo en formato json.
    //         return respuesta.json()
    //     })
    //     .then(datos => {
    //         const {id, nombre, empresa, trabajo} = datos;
    //         console.log(`
    //         Datos del Cliente: 
    //         ID: ${id},
    //         Empleado: ${nombre},
    //         Empresa: ${empresa},
    //         Trabajo: ${trabajo} 
    //         `);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // * Forma corta
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )

}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>

    `
}