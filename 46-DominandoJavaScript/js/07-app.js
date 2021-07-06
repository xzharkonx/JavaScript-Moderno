
// # 293. Event Loop o Loop de Eventos en Js

// ? Modelo de concurrencia y Loop de eventos.

// ? Es como se va ejecutando el código en JS.
// ? Es decir, que tiene más prioridad.
// ? Una función, una variable, un promises, etcétera.

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido');
}).then(console.log) // Console.log a ese resolve.

console.log('Último');

function hola(){
    console.log('hola');
}
hola();

// ? Pero vemos que tenemos en desorden la ejecución
// ? del código. Se ejecuta de la siguiente forma:
// - console.log(object);
// - Funcions
// - Promise
// - setTimeout

// ? El código de JavaScript es, como se dice, de un solo
// ? hilo, es decir, se ejecuta una línea.
// ? Solamente sucede una cosa a la vez y cada vez que se
// ? va completando una, se manda llamar la siguiente.

// * A esto se le conoce como el Loop de Eventos.

// ? Piensa en el como un while que va ejecutando tareas
// ? mientras haya algo disponible.

// ! Pero en JavaScript hay eventos que tienen más
// ! prioridad que otros.
 
// ? Tiene algo que se le llama Stack/Pila
// ? donde va atendiendo a todos los elementos de 
// ? mayor prioridad, mientras que los demás los deja
// ? en otro lado llamado Queue/Cola, cuando los eventos
// ? del stack terminan, se busca en Queue nuevamente
// ? el de mayor prioridad.
