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


function imprimirAlerta(mensaje, tipo){

    // Para revisar si hay una alerta.
    const alerta = document.querySelector('.alerta');

    // Si no hay alerta mostrarás el mensaje de alerta
    // Esto evitará que se creen muchos mensajes al presionar el botón
    if (!alerta) {

        // ? Crear la alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

        if (tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;

        
        formulario.appendChild(divMensaje);


        setTimeout(() => {
            // Eliminamos el nodo de la alerta
            // Así ya no habrá alerta en la primera comprobación
            divMensaje.remove();
        }, 3000);

    }

}
