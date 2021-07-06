
// # 100. Modificar Textos o Imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1');
// ? Con chaining (encadenado)
const encabezadoTexto = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado); // Nodo h1.
console.warn(encabezadoTexto); // Contenido de texto del Nodo h1. Solo el texto.

// ## Accediendo al texto del encabezado
// ? hay 3 formas distintas

// * 1ra forma:
console.log(encabezado.innerText);
// Diferiencia: Si el elemento de arriba llegará a perder la visibilidad con css (visibility: hiden;)
// el elemento desaparece y los de abajo si permanecen. Solo el texto.

// * 2da forma:
console.log(encabezado.textContent);

// * 3ra forma:
// Pero innerHTML también se trae el codigo html que tengamos dentro de este elemento
console.log(encabezado.innerHTML);

// ### Cambiando el texto al titulo
// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// ### Editando imagenes
// const imagen = document.querySelector('.card img');
// imagen.src = 'img/hacer2.jpg';
// console.log(imagen);