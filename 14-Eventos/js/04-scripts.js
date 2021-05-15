
// # 109. Evento Submit a un formulario

const formulario = document.querySelector('#formulario');

// * Para detectar cuando el formulario ha sido enviado

// formulario.addEventListener('submit', (e) => {
        
        // ? Evitando que se  ejecute el Submit
        // e.preventDefault();
        // ? Conociendo el método de envió del formulario
        // console.log(e.target.method);
        // ? Conociendo hacia donde enviará la información
        // console.log(e.target.action);
    
// });

// * Segunda forma de hacerlo, llamando a la función.
formulario.addEventListener('submit', validarFormulario);

// ? Le pasamos el evento "e" aquí
function validarFormulario(e){

        // Evitando que se  ejecute el Submit
        e.preventDefault();
        // Conociendo el método de envió del formulario
        console.log(e.target.method);
        // Conociendo hacia donde enviará la información
        console.log(e.target.action);

}