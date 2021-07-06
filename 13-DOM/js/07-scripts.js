
// # 101. Cambiando el CSS con JavaScript

const encabezado = document.querySelector('h1');
console.log(encabezado);

// * Acceder a los estilos
console.log(encabezado.style);

// ? Una característica que tienen los estilos en JavaScript es que en diferencia de CSS.
// * Ejemplo:

// ?     CSS:
//         justify-content:;   
            
// !   JavaScript:
//         justifyContent = '';
//         backgroundColor = '';

// * Ejemplo:
// encabezado.style.backgroundColor = 'red';

// ? Las mismas propiedades que tenemos en CSS las vamos a encontrar en JavaScript de está forma.

// encabezado.style.fontFamily = 'Arial';
// encabezado.style.fontSize = '56px';
// encabezado.style.textTransform = 'uppercase';

// ? Pero lo que más se recomienda es agregar o quitar clases ya que la parte del estilo 
// ? corresponde a CSS

const card = document.querySelector('.card');

// * Agregando una clase a la lista de clases del elemento seleccionado con el método .add('')
// card.classList.add('nueva-clase');
card.classList.add('nueva-clase', 'segunda-clase');

// * Eliminando una clase a la lista de clases del elemento seleccionado con el método .remove('')
// card.classList.remove('clase'),
// console.log(card.classList);

// * Agregando un nombre directamente a la clase
// card.className = 'clase-1';
card.className = 'clase-1 clase-2';

// * Eliminando un nombre directamente a la clase
// card.className = '';

// * Verificando si contiene una clase
// ? Utilizaremos el método classList seguido del método contains y le pasamos una cadena de texto con
// ? la cual vamos a comprobar si existe esa clase en esa lista de clases.
card.classList.contains('clase-1') ? console.log('Tiene la clase de: clase-1') : console.log('No tiene esa clase');

// * Quitar y poner una clase
// ? Utilizaremos el metodo de toggle y le pasaremos una cadena de texto con la clase que queremos
// ? quitar o poner, actuara como un booleano.
// ! Generalmente será sobre algún evento de algún botón que se preciona para quitar o para poner
// btn.classList.toggle('myStyle');

// Más info en : https://www.w3schools.com/howto/howto_js_toggle_class.asp