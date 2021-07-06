
// * 124. Primeros pasos con el Proyecto.

// # Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail');

// # Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// # Expresión regular para validar formularios
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

eventListeners();
function eventListeners(){
    // Cuando la app Arranca
    // Vamos a disparar una función, básicamente cuando cargue el documento por primera vez
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del Formulario
    // Con le método blur será ideal para validar por que será cuando el usuario cambia a otro campo
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}


//v# Funciones

function iniciarApp(){
    console.log(`Iniciando...`);
    btnEnviar.disabled = true;
    // btnEnviar.style.opacity = '.5';         
    // btnEnviar.style.cursor = 'cursor-not-allowed';  
    // btnEnviar.style.cursor = 'wait';  
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// # Valida el formulario
function validarFormulario(e){
    
    // ## Si el campo viene vacio
    if (e.target.value.length > 0) {
        // Si hay algo
        // Removemos los mensajes de error
        const error = document.querySelector('p.error');
        // si hay un error lo remueve
        if (error) {            
            // console.log('Borrando vacio');
            error.remove();  // Se eliminará el nodo p       
        }

        e.target.classList.remove('border', 'border-red-500');
        // Le agregamos un color de borde verde por que ya está bien el campo
        e.target.classList.add('border', 'border-green-500');
        
        
    } else {
        // Removemos la clase que da el color de borde verde
        e.target.classList.remove('border', 'border-green-500');
        
        // Le agregamos un color de borde rojo por el error
        // e.target.style.borderBottomColor = 'red';
        // e.target.style.borderBottom = '3px solid red';
        e.target.classList.add('border', 'border-red-500');
        
        mostrarError('Todos los campos son obligatorios');
    }
    
    // ## Si el Email no es valido
    if (e.target.type === 'email') {
        
        
        // Buscaremos en el input de email que haya al menos un @, al verificarlo nos devolvera
        // -1 si no existe y si si existe nos devolverá la posición en donde está en la cadena de texto
        // recogida del input
        // const resultado = e.target.value.indexOf('@');
        // if (resultado < 0) {
            
            // ? Obtenemos el valor del email para compararlo en la expresión regular
            // console.log(e.target.value);
            
            // ## Validando pero con expresiones regulares para el input email
            // ? Devolvera true o false si se cumple o no la validación.
            
            if (er.test(e.target.value)) {
                // Removemos los mensajes de error
                const error = document.querySelector('p.error');
                // si hay un error lo remueve
                if (error) {
                    
                    // console.log('Borrando vacio');
                    error.remove();        
                }

                console.log('Email válido');
                // Si hay algo
                e.target.classList.remove('border', 'border-red-500');
                // Le agregamos un color de borde verde por que ya está bien el campo
                e.target.classList.add('border', 'border-green-500');
                
            }else{

                // Removemos la clase que da el color de borde verde
                e.target.classList.remove('border', 'border-green-500'); 
                // Le agregamos un color de borde rojo por el error   
                e.target.classList.add('border', 'border-red-500');

                mostrarError('El email no es válido');
        }
    } 

    // Hacemos la validación del email ayudandonos de la expresión regular
    // Además de referirnos al valor del input del email actual
    if(er.test(email.value) !== false && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }

}

function mostrarError(mensaje){

    // ## Volveremos a desabilitar el botón de enviar.
    btnEnviar.disabled = true; 
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3',
        'mt-3', 'mb-5', 'text-center', 'error'); // !! Aquí se le añade la Clase error.

        // ? Ahora vamos a buscar si es que hay una clase que contenga la de "error".
        const errores = document.querySelectorAll('.error');
        // ? Si no existe un error previo, lo agregamos.
        if(errores.length === 0){
            formulario.appendChild(mensajeError);
            // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        }

}

// # Envia el email
function enviarEmail(e) {
    e.preventDefault();
    
    // ## Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "flex";

    // !! Después de 3 segundos ocultar el spinner y mostrar el mensaje
    // ? Existen 2 formas de crear timmers
    // ? Uno es con setTimeout
    setTimeout(() => {
        // console.log(`Está función se ejecuta despues de 3 segundos`)
        // Ocultamos el spinner
        spinner.style.display = 'none';

        // Mensaje que dice que se envió correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-8', 'p-3', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        // Agregamos el mensaje al HTML
        // Inserta el parrrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        // Luego quitamos el parrafo de aviso de envio automáticamente
        setTimeout(() => {
            parrafo.remove();
            // Reseteamos el formulario
            resetearFormulario();
        }, 5000);

    }, 3000);
    
    // ? Timmer en intervalos de tiempo
    //     setInterval(() => {
    //         console.log(`Está función se ejecuta cada de 3 segundos`)
            
    //     }, 3000);
}


// # Función que resetea el formulario
function resetearFormulario(e){
    // ? Prevenimos que se envie el formulario el botón de reset.
    if (e){ // !! Si se ejecuto desde un elemento nodo, y no fue invocación del método.
        if (e.target.id == "resetBtn"){
            console.log("Botón Reset");
            e.preventDefault();
        }
    }
    
    // ## Esta es una función incluida en js que sirve para vaciar el formulario
    formulario.reset();
    // ? Lamamos de nuevo a la función para que el boton se vuelva a desabilitar
    iniciarApp();
}