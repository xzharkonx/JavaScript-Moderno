
// * Función para enviar un mensaje de campos validados o erroneos.
export function mostrarAlerta(mensaje) {
    
    // Veremos si existe la alerta seleccionandola.
    const alerta = document.querySelector('.bg-red-100');

    // Si no existe la alerta entonces...
    if(!alerta){

        // Crearemos un parrafo
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-lg', 'm-auto', 'mt-6', 'text-center');

        // Creamos el mensaje de la alerta
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        // Seleccionamos el formulario para colocar la alerta
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        // Eliminaremos a alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}

// # Validar campos del formulario.
export function validar(obj){

    // * Obtenemos los valores del objeto, para todos comprobar 
    // ? si ninguno tiene un valor vacio, si se cumple devolverá true.
    // ! Pero si alguno de ellos está vació devolverá false.
    // console.log(Object.values(cliente).every(input => input !== ''));
    
    // Pero queremos que cuando se cumpla entonces que nos devulva false, 
    // entonces lo negamos con !
    // console.log(!Object.values(cliente).every(input => input !== ''));

    return !Object.values(obj).every(input => input !== '');
}
