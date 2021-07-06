(function() {

    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    
    const formulario = document.querySelector('#formulario');;

    document.addEventListener('DOMContentLoaded', () => {

        // Conectamos a la DB
        conectarDB();

        // Actualia el registro
        formulario.addEventListener('submit', actualizarCliente);

        // ## Verificar el ID de la URL
        
        // ? Hay una API que se llama: URLSearchParams
        // ? Que nos va a permitir que parametros están disponibles en
        // ? la URL y le pasamos: window.location.search
        const parametrosURL = new URLSearchParams(window.location.search);

        // Obtenemos el dato
        idCliente = parametrosURL.get('id')
        console.log(idCliente);

        if(idCliente) {
            
            // Retrasamos la consulta un poco
            // Porque en lo que revisa si existe la base de datos
            // se hace lo consulta muy rápido y tira error
            // Esto luego se solucionará con un tema más adelante que es
            // la programación asincrona o promesas. Pero ahora lo haremos así.
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 800);
        }

    });

    function actualizarCliente(e) {

        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || empresaInput === '' || telefonoInput === '') {
            // console.log('Hubo un error');
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Actualizar Cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente) // Lo convertimos a entero porque venia str
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            console.log('Editado Correctamente');
            imprimirAlerta('editado Correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
        transaction.onerror = function(error) {
            // Para debuggear el rror si queremos
            // console.log(error)
            console.log('Hubo un error');
            imprimirAlerta('Hubo un error', 'error');
        }



    }

    function obtenerCliente(id) {
        console.log(id);

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        console.log(objectStore);

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            // Si es que hay un resultado
            if(cursor) {
                console.log(cursor.value);

                // Filtra la lista de objetos de clientes por ID
                if(cursor.value.id === Number(id)) {
                    console.log(cursor.value);

                    // Llenaremos el formulario con la información
                    // del cliente que encontro igual al ID
                    llenarFormulario(cursor.value);
                }
                
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {

        const { nombre, email, telefono, empresa } = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;

    }

    function conectarDB() {

        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
            // console.log('Conectado con éxito.');
        }
    }

})();