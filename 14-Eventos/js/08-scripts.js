
// # 113. Prevenir Event Bubbling con un método
// * Esta es otra técnica para prevenir el Event Bubbling

// ## Evitar la propagación con contenido creado...
// Primer parrafo
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// * Agregamos un evento y una función, de esta forma evitaremos ese Event Bubbling <------------
// * al ir creando nuestros nodos. 
// parrafo3.onclick = nuevaFuncion;

// ? Si hay que pasarle parametros la sintaxis es un poco diferente
// parrafo3.onclick = nuevaFuncion('1234-Ok');

// * Otra forma de hacerlo es con un Arrow Function
parrafo3.onclick = () => {nuevaFuncion('1234-Ok')};

// ? Esto es por si cuando vamos agregando elementos también le iremos agregando eventos 
// ? y de estos funciones

// ## Ejemplo --------------------------------------------------------------------------------------

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info



// ? Creamos una función que podemos llamar en el evento creado para el parrafo 3
function nuevaFuncion(id){
    console.log(`Desde nueva función`, id);
}