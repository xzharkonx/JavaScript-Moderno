
// # 108. Eventos sobre los Inputs

const busqueda = document.querySelector('.busqueda');

// ## Teclado

// ? Este se ejecuta cuando presionas una tecla
// busqueda.addEventListener('keydown', () => {
//     console.log(`Escribiendo...`);
// });

// ? Este se ejecuta cuando sueltas una tecla
// busqueda.addEventListener('keyup', () => {
//     console.log(`Dejando de escribir...`);
// });


// ? Cuando copias el texto que estás escribiendo
// busqueda.addEventListener('copy', () => {
//     console.log(`Copiando el texto`);
// });
// ? Cuando PEGAS texto
// busqueda.addEventListener('paste', () => {
//     console.log(`Copiando el texto`);
// });
// ? Cuando cortas el texto
// busqueda.addEventListener('cut', () => {
//     console.log(`Copiando el texto`);
// });
  
// ## Input        

// ? Este se ejecuta cuando entras y sales del input (cuando haces clic o tab dentro de el y sales)
// busqueda.addEventListener('blur', () => {
//     console.log(`Entrando y saliendo`);
// });


// ? El más común de todos que se llama input, este se ejecutará cuando realizas cualquier 
// ? evento a excepción del blur.
// busqueda.addEventListener('input', () => {
//     console.log(`Evento Input`);
// });



// ? También podemos obtener información acerca del evento llamando a la función que viene con
// ? el evento. Con la función que llamamos la variable "e" invocaremos una serie de metodos 
// ? que vienen con el evento.

// * Averiguamos el tipo de elemento que detono este evento
// busqueda.addEventListener('input', (e) => console.log(e.type)); // ! input

// ? Con e.target nos va a  decir con que elemento en específico estamos trabajando
// busqueda.addEventListener('input' , (e) => console.log(e.target)); // ! nodo input

// ? Cuando queremos saber que estamos escribiendo, obtenemos el valor con .value
busqueda.addEventListener('input', (e) => console.log(e.target.value));

// ? queremos saber la longitud del texto, obtenemos el valor con .length
// busqueda.addEventListener('input', (e) => console.log(e.target.value.length));

// * Validando si el input tiene texto o no
busqueda.addEventListener('input', (e) => e.target.value === '' ? console.log(`Fallo la validación`) : '');