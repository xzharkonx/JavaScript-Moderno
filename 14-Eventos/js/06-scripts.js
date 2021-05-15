
// # 111. Qué es el Event Bubbling?

const cardDiv  = document.querySelector('.card');
const infoDiv  = document.querySelector('.info');
const titulo  = document.querySelector('.titulo');

// cardDiv.addEventListener('click', () => {
//     console.log(`Click en card`);
// });

// infoDiv.addEventListener('click', () => {
//     console.log(`Click en infoDiv`);
// });

// titulo.addEventListener('click', () => {
//     console.log(`Click en titulo`);
// });

// * Observa como se ejecutan todos los metodos porque al hacer clic en alguno de ellos y de alguna
// * manera se cruzan graficamente en la interfaz HTML por las etiquetas y como estan contenidos
// * los elementos, esto significa que podemos detonar más de un evento por que seleccionamos a 
// * varios elementos


// ? Para detener ese comportamiento podemos hacerlo de la siguiente manera
// ? llamamos a la función que se invoca por el evento y a esta le llamaremos 
// ? el método de .stopPropagation()

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log(`Click en card`);
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log(`Click en infoDiv`);
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log(`Click en titulo`);
});