(function () {

    let DB;

    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        // Si existe y accede a la bas de datos
        if (window.indexedDB.open('crm', 1)) {
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarRegistro);

    });

    function eliminarRegistro(e) {
        // console.log(e.target);
        if (e.target.classList.contains('eliminar')) {
            
            // console.log('Diste clic en eliminar');
            
            // Accedemos a los data-set del nodo HTML (id)
            const idEliminar = Number(e.target.dataset.cliente);
            // console.log(idEliminar);

            //  ? Con la función confirmar, nos preguntará si queremos
            //  ? eliminar, esto nos devolverá un true o un false,
            //  ? si aceptamos o no.
            // !! También se podría utilizar una librería llamada sweetalert
            const confirmar = confirm('Deseas eliminar este cliente');
            console.log(confirmar);

            // Si elijimos aceptar a eliminar
            if(confirmar) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');
                objectStore.delete(idEliminar);

                transaction.oncomplete = function() {
                    console.log('Eliminado...');

                    // Lo eliminamos del HTML
                    e.target.parentElement.parentElement.remove();
                }
                transaction.onerror = function() {
                    console.log('Hubo un error...');
                }
            }



        }
    }

    // ## Crea la base de datos de indexDB
    function crearDB() {

        // ? Abrimos la conexión
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function () {
            console.log('Hubo un error');

        };

        crearDB.onsuccess = function () {
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function (e) {

            // ? Este será el resultado que vendrá 
            // ? a ser nuestra Base de Datos.
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB Lista');

        }
    }


    function obtenerClientes() {

        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            // Listamos los datos con cursores
            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if (cursor) {

                    // Con .value Traera el objeto
                    // console.log(cursor.value);
                    const { nombre, empresa, email, telefono, id } = cursor.value;
                    listadoClientes.innerHTML += ` 
                        <tr>
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
                        </tr>
                        `;

                    // Con este método le indicamos que vaya al siguiente dato
                    // En este caso será de nuestra lista de objetos de clientes
                    cursor.continue();

                } else {
                    console.log('No hay más registros');
                }

            }
        }
    }

})();