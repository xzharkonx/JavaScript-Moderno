
// # 102. Traversing the DOM 

// ? En JavaScript todo está conectado al document, pero la forma en que te vaz a mover por los
// ? diferentes elementos se le conoce como traversing the DOM, es decir, irlo recorriendo.
// ? Como si fuera un mapa o un turista en una ciudad que no conoces y vas a irla recorriendo 
// ? sobre los lugares que son de tu interés.

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);


// Primer elemento de la navegación
console.log(navegacion.firstElementChild);
// último elemento de la navegación
console.log(navegacion.lastElementChild);


// ## Traversing the DOM - Del Padre al Hijo.

// Con esto habremos seleccionado a la navegacion [nav] y observamos que dentro tenemos etiquetas a
// a las cuales se les conoce como nodos.
// Podemos acceder a esos nodos de la siguiente forma.

// ! .childNodes nos va a traer también los espacios en blanco si es que son más de un renglon como texto,
// ! esto nos generará una lista de nodos con elementos de texto, por lo que está lista estaría como sucia
// ! console.log(navegacion.childNodes);

// ? Para ello existe mejor .children, que esta si nos traerá solo los elementos html que 
// ? tengamos dentro que hayamos creado.
console.log(navegacion.children);

// for(const i in navegacion.children){
//     console.log(navegacion.children[i].innerText);
//     console.log(i);
// }
// console.log(navegacion.children.length);

// Seleccionaremos el primer elemento de esa lista de hijos
console.log(navegacion.children[0]);

// ### Nos va a permitir saber que tipo de etiqueta es:
console.log(navegacion.children[1].nodeName); // A de <a href="">...</a>

// ### No va a permitir identificar los diferentes tipos de elementos de nodos que tenemos.
// Seleccionamos el hijo de la posición 1.
console.log(navegacion.children[1].nodeType); // Nos devuelve un número de abajo según el tipo de nodo.

// Documentación sobre el valor que nos da: https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
// Name	                       Value
// ELEMENT_NODE	                 1
// ATTRIBUTE_NODE	             2
// TEXT_NODE	                 3
// CDATA_SECTION_NODE	         4
// ENTITY_REFERENCE_NODE	     5
// ENTITY_NODE	                 6
// PROCESSING_INSTRUCTION_NODE   7
// COMMENT_NODE	                 8
// DOCUMENT_NODE	             9
// DOCUMENT_TYPE_NODE	         10
// DOCUMENT_FRAGMENT_NODE	     11
// NOTATION_NODE	             12

const card = document.querySelector('.card');
console.log(card.children[0]);
console.log(card.children[1].children[0]);
console.log(card.children[1].children[1].textContent);

// ? Mira como con varios selectores comenzamos a navegar sobre sus diferentes elementos
// ? eso es lo que se le conoce como Traversing the DOM 
// ? y está forma con children y las posiciones es los que nos va a permitir hacerlo.

// ### También podemos modificarlo.

card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the dom, lorem ipsum dolor a simet';
console.log(card.children[1].children[1].textContent);

// Cambiando la imagen
// card.children[0].src = 'img/hacer4.jpg';
// console.log(card.children[0]);



// ## Traversing the DOM - Del Hijo al Padre. ---------------------------------------------------------------
// * Ahora será en traversing invertido donde ahora accederemos a los padres

// ? Así habremos seleccionado el padre del elemento card que viene a ser el [div] elemento 
// ? contenedor-cards
// ? Pero está también considerá los espacios de linea que dejan las etiquetas como se explico arriba
// console.log(card.parentNode);

// ? Está solo traerá los elementos
console.log(card.parentElement);

// ### Buscando al padre del padre del elemento
console.log(card.parentElement.parentElement);


// ## Traversing the DOM - Del Hermano al Hermano. ----------------------------------------------------------
// ? Para acceder al siguiente elemento dentro de su mismo padre
console.log(card);                      // Primer hermano
console.log(card.nextElementSibling);   // Siguiente Segundo hermano.
console.log(card.nextElementSibling.nextElementSibling);   // Siguiente tercer hermano.

// * O bien al elemento previo
// ? Seleccionamos el último elemento de los card
// const ultimoCard = document.querySelector('.card:nth-child(4)');
const ultimoCard = document.querySelector('.card:last-of-type');
console.log(ultimoCard);

// * Penúltimo o anterior al último card
console.log(ultimoCard.previousElementSibling);