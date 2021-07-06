
// # 98. querySelector

// * Nos va a retornar máximo un elemento
// ? Pero tiene la caracteristica que te permite seleccionar incluso clases
// ? Similar a una hoja de estilos cuando estás escribiendo selectores css

// ? Le pasamos un selector como si fuera de css
// ? Solo retornará el primero que encuentre
// ? Nos traera el Nodo como tal
const card = document.querySelector('.card');
console.log(card);

// * Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// De la sección de hospedaje, seleccionamos el segundo card
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

// ? También nos permite seleccionar id

// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);