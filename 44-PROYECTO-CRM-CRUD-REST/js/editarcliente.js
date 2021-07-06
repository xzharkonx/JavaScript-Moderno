
import { obtenerCliente, editarCliente } from './API.js'
// * Importamos funciones
import { mostrarAlerta, validar } from './funciones.js'

(function(){

    // * Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        // * Indentificando al cliente
        // ? Lo primero es identificar que cliente es el que estamos editando
        // ? Lo haremos mediante la url que se envio.

        const parametrosURL = new URLSearchParams(window.location.search);
        
        // ? Obtenemos los parametros con .get() y le pasamos el parametro por el
        // ? cuál lo estamos buscando.

        // ! Aquí ya traeremos el parámetro, aun que también trae más funciones.
        // parametrosURL.get('id') // ? Traer un parámetro.
        // parametrosURL.getAll() // ? Traer todos los parámetros.


        const idCliente = parseInt( parametrosURL.get('id') );
        // console.log(idCliente);
        
        // ! Estamos obteniendo correctamente el id del cliente a editar.

        // ? Agregamos async await para este EndPoint
        // ? Por la velocidad de carga para que espere  obtenga el promise
        const cliente = await obtenerCliente(idCliente)
        // console.log(cliente);
        mostrarCliente(cliente);

        // ## Submit al formulario.

        const fomulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    // ### Función para agregar los datos del cliente al formulario.
    function mostrarCliente(cliente){

        // Destructuramos la información. 
        const { nombre, empresa, email, telefono, id } = cliente;
        
        // * Agregamos los datos al formulario
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    // ### Función para validar los datos del formulario.
    function validarCliente(e) {
        e.preventDefault();

        // ! Recuerda que ya se había creado una función para validar.
        // ? Pegamos lo de abajo para validar.

        // ! Le agregamos el id.
        const cliente = {

            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value // * id agregado

        }


        if(validar(cliente)){

            // !! En caso de que no se cumpla la validación
            // ! Mostrar mensaje.
            console.log(`Todos los campos son obligatorios`);
            
            // ? Mostramos el mensaje de alerta
            mostrarAlerta(`Todos los campos son obligatorios`);

            return;
        }

        console.log('Si se paso la validación, reescribe el objeto');

        // * Actualizamos el Objeto cliente
        editarCliente(cliente);

    }

})();