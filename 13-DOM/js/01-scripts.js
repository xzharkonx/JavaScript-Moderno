
// # 95. Acceder a elementos del HTML con document

let elemento;

// document es la variable que selecciona todo el documento
elemento = document;
// Que nos seleccione todo
elemento = document.all;
// se va a referir a la parte superior
elemento = document.head;
// El cuerpo del documento
elemento = document.body;
// También puedes buscar el dominio actual, esto nos dirá en que url está cargando este proyecto
elemento = document.domain;
console.log(elemento);

// Nos entregara todos los formularios como en un arreglo pero se llama HTML Collections
elemento = document.forms;
// Seleccionamos el primer formulario
elemento = document.forms[0];
// Seleccionamos el id del primer formulario
elemento = document.forms[0].id;
// Seleccionamos el method del primer formulario
elemento = document.forms[0].method;
// Seleccionamos la clase del primer formulario
elemento = document.forms[0].classList;
// Seleccionamos al action del primer formulario
elemento = document.forms[0].action;
console.log(elemento);

// Seleccionar todos los links [lista de elementos]
elemento = document.links;
// Seleccionamos link [4] [elemento]
elemento = document.links[4];
// Seleccionamos link [4] y accedemos directamente a su lista de clases [lista]
elemento = document.links[4].classList;
// Seleccionamos link [4] y accedemos directamente al nombre de la clase [String]
elemento = document.links[4].className;
console.log(elemento);

// Selecciona todas las imagenes [lista de elementos]
elemento = document.images

// Seleccionamos todos los Scripts que tenemos en la página
elemento = document.scripts


console.log(elemento);