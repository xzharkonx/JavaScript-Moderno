

// * Importamos EndPoints

import { obtenerClientes, eliminarCliente } from './API.js'

// * Vamos a mostrar los clientes
(function() {

    const listado = document.querySelector('#listado-clientes');
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    // ? Para el boton de eliminar.
    listado.addEventListener('click',confirmarEliminar);

    // * Agregamos Async Await
    // ? Porque si no, nos dará un error.
    // !! Promise {<pending>}
    // ? Esto pasa porque cuando el documento carga, estamos mandando
    // ? a llamar una función que aún no se a completado, es decir,
    // ? los clientes pueden ser 1 o pueden ser 100 y van a ser 
    // ? tiempos diferentes en lo que se haya completado y se haya 
    // ? descargado todo el listdo.

    // ? Le estamos diciendo, tan pronto como este listo el documento
    // ? quiero que me traigas todos los clientes, a esas alturas.
    // ! Todavía no se cumple lo que es el promise de fetch para 
    // ! descargar todos los clientes.
    
    // * Por eso se agrega Asyn Await
    // ? Para que espere a descargar todos los clientes y luego
    // ? continue con la ejecució normal del codigo.

    async function mostrarClientes(){
        
        // *  Obtenemos los datos del EndPoint
        const clientes = await obtenerClientes();

        // ? Pero debemos detener la ejecución de el código siguiente.
        // ? para que la promesa se haya completado adecuadamente.
        // * Por eso se agrega Asyn Await
        
        console.log(clientes);

        clientes.forEach(cliente => {
            
            // Descructuramos el objeto
            const {id, nombre, email, telefono, empresa} = cliente;

            // Creamos un nodo con los resultados
            const row = document.createElement('tr');
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        // Agregamos la info al html
        listado.appendChild(row);

        });
        
    }

    
    function confirmarEliminar(e) {
        
        // ! Para saber si se trata del botón de eliminar
        if(e.target.classList.contains('eliminar')) {

            // console.log('Diste click en eliminar');

            // ? Obtenemos el id del cliente mediante el data-set
            const clienteId = parseInt(e.target.dataset.cliente);
            // console.log(clienteId);

            // ! Mensaje de confirmación por default
            const confirmar = confirm('¿Deseas eliminar este registro?');
            
            if(confirmar) {
                // console.log('Eliminando...', clienteId);

                // * Eliminar cliente.
                // ? Llamamos a la función del EndPoint.
                eliminarCliente(clienteId);

            }
        }
    }


})();
