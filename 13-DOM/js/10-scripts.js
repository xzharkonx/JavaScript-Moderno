
// # 104. Generar HTML con JavaScript

// * Creación del nodo

// Hay varias formas para crear elementos.
// Una común es la siguiente

// ## Creación de elementos
// * Creamos un enlace, no importa si son minúsculas o mayúsculas
const enlace = document.createElement('A');
// Añadiendo texto
enlace.textContent = 'Nuevo Enlace';
// Añadiendo el href
enlace.href = '/nuevo-enlace';
// Agregamos otro atributo
enlace.target = '_blank';

// Atributos personalizados
// Atributo: data-enlace
// Valor: nuevo-enlace
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// Agregandole alguna clase
// enlace.classList.add('alguna-clase');
enlace.classList.add('alguna-clase', 'otra-clase');

// Agregando una función
enlace.onclick = miFuncion;

function miFuncion(e){
    // Para prevenir que nos lleve a esa ruta
    // e será el elemento/nodo en sí
    e.preventDefault(); 
    // Mensaje
    console.log(e.target.textContent);
    alert('Diste Clic');
}

console.log(enlace);


// ## Añadir elementos al HTML
// ? Ahora le diremos donde queremos agregarlo por ejemplo en la navegación, 
// ? por lo tanto seleccionaremos la navegación la navegación

const navegacion = document.querySelector('.navegacion');

// * Con el método .appendChild es como agregarle un hijo nuevo a la navegación
// * le pasamos el nodo en este caso la variable enlace.
// ? Pero appendChild colocará ese nodo al final de todos los hijos que este contenedor
// ? tenga: navegacion.appendChild(enlace);

// * Aunque podemos colocarlo antes de un elemento con insertBefore.
// ? Este pedirá 2 argumentos, el primero es el elemento que agregaremos 
// ? y el segundo es donde deseamos mostrarlo
// ! Para saber donde mostrarlo lo ideal es consultar donde estamos apuntando en el DOM
console.log(navegacion.children); 

// Aquí nos daremos cuenta que queremos insertarlo antes de la posición n°1, entonces se lo indicamos
// y se lo pasamos como segundo argumento
navegacion.insertBefore(enlace, navegacion.children[1]);

// ? También podemos agregar HTML con innerHtml

// ## Crear un CARD  de forma dinámica ---------------------------------------------------------------
// Crearemos 3 parrafos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');
console.log(parrafo1); // Podemos ir viendo como va quedando

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
console.log(parrafo2); // Podemos ir viendo como va quedando

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3); // Podemos ir viendo como va quedando

// Crear div con la clase de info
const info = document.createElement('div');
// Le añadimos una clase
info.classList.add('info');
// Le agregaremos los parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// ! Podemos ir viendo como va quedando, vemos que el div ya contiene
// ! los parráfos adentro.
console.log(info); 

// Crearemos una imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';
console.log(imagen);

// Creamos el card (div padre)
const card = document.createElement('div');
card.classList.add('card');

// ! Mira como todo se le añade consegutivamente.

// Asignar la imagen al card
card.appendChild(imagen);
// Agregamos la información
card.appendChild(info);

// ! Podemos ir viendo como va quedando, vemos que el card ya contiene los parráfos
// ! y la imagen adentro.
console.log(card); 

// ? Finalmente tenemos que ver donde lo colocamos, lo dejaremos dentro de la section con 
// ? la class 'hacer' y luego dentro del contenedor de contenedor-cards

// Insertarmos en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');

// ? Lo insertamos al final del contenedor
// contenedor.appendChild(card);
// ? O al inicio del contenedor, para ello nos apoyamos de la referencia y con el método insertBefore
contenedor.insertBefore(card, contenedor.children[0]);