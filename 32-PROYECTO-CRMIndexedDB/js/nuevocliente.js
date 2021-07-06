(function() {

    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        formulario.addEventListener('submit', validarCliente);

    });


    function validarCliente(e) {
        e.preventDefault();
        // console.log('Validar');

        // Leyendo todos los imputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' || empresa === '') {

            imprimirAlerta('Todos los campos son obligatorios', 'error');
            console.log('Error');
            return;

        }

        // ## Crear un objeto con la información

        // Como la variable y el atributo es lo mismo,
        // se coloca solo una vez.
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id : Date.now()
        }

        // Otra forma de agregar el id
        // cliente.id = Date.now(),
        

        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(cliente) {

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = function() {
            // console.log('Hubo un error');
            imprimirAlerta('Hubo un error, no puedes ingresar el mismo dato inmediatamente.', 'error');

        };

        transaction.oncomplete = function() {
            // console.log('Cliente Agregado');
            imprimirAlerta('El Cliente se agregó Correctamente');

            setTimeout(() => {
                
                // ? Hacemos una redirección a:
                window.location.href = 'index.html';

            }, 3000);
        }
    }

})();