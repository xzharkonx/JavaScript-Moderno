
// * Importamos funciones
import { mostrarAlerta, validar } from './funciones.js'

// * Importamos funcionalidades de la API
import { nuevoCliente } from './API.js'

(function() {

    // * Trabajaremos sobre el html de nuevo-cliente.html
    // Accedemos al formulario.
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    // ? Validaremos el formulario
    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        // ! Técnica para validar formularios
        // ? Creamos un objeto

        // * Object literal en Haussman.
        // ? Solo es necesario tener el atributo si es
        // ? igual al nombre de la misma
        const cliente = {

            nombre,
            email,
            telefono,
            empresa

        }


        if(validar(cliente)){

            // !! En caso de que no se cumpla la validación
            // ! Mostrar mensaje.
            console.log(`Todos los campos son obligatorios`);
            
            // ? Mostramos el mensaje de alerta
            mostrarAlerta(`Todos los campos son obligatorios`);

            return;
        }

        console.log('Si se paso la validación');

        nuevoCliente(cliente)

    }

})();