
// # 228. Como utilizar FETCH API

// * FETCH API Es nativo de JavaScript.
// ? status: 200 
//   - Significa que se logro hacer correctamente la consulta,
//   -| pudo encontrar el archivo.
// ! status: 400 
//   - Significa que no se logro hacer la consulta,
//   -| y no pudo encontrar el archivo.

// ! Muy importante
// ? FETCH API Solamente puede leer texto plano o JSON.
// !! No soporta XML.



const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    // ? Previamente se hacia con AJAX, ahora se recomienda hacerlo
    // ? con fetch.
    
    // ? Dentro de fecth le pasamos la URL de donde vienen los datos
    // ? O a donde se van a enviar los datos.


    const url = 'data/datos.txt';
    fetch(url) // * Este vendría a ser el método antes de la promesa.
        .then( respuesta => { // * Si encuentra la URL, nos dará una respuesta. Promesa cumplida.
            
            // ? La respuesta o esta variable será lo que se haya retornado 
            // ? en el resolve de la promesa. 
            // ? Es básicamente un objeto  "Response" con los datos de la conexión.


            console.log(respuesta);             // Nodo
            console.log(respuesta.status);      // 200
            console.log(respuesta.statusText);  // OK
            console.log(respuesta.url);         // URL
            console.log(respuesta.type);        // basic

            // * La respuesta como json
            // return respuesta.json()

            // * La respuesta como txt
            return respuesta.text()

            // * Para hacer un fetch consecutivo
            // return fetch(url)

        }) 
        .then( datos => {
            
            // * Mandamos a imprimir los datos que retornamos.
            console.log(datos);
        })
        .catch( error => { 
            
            // ? Para saber donde está el error.
            console.log(error);
        });


}