
// #  99. .querySelectorAll

// ? .querySelectorAll va a retornarte todos los elementos que cumplan la condición del selector.

const cards = document.querySelectorAll('.card');
console.log(cards);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// * Si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // No marcara error pero nos dará un notList vacio (una lista cacía de nodos)