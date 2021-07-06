
// 115. Primeros pasos con el Proyecto.

// Variables
const carrito = document.querySelector('#carrito');
// Aquí es donde se van a colocar los elementos - la tabla del menu del carrito.
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
// La lista de cursos que se muestran en la página
const listaCursos = document.querySelector('#lista-cursos');
// Botón para eliminar los cursos del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// 117. Mostrando en el Carrito el cruso seleccionado-------------------------------
let articulosCarrito = [];
// ---------------------------------------------------------------------------------

// Tenemos que agregar varios listener/eventos
// Algo que podemos hacer es crear una función
// donde registraremos todos nuestros eventListeners
cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // 120. Eliminar un Curso del Carrito ----------------------------------------------------------------
    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    // ---------------------------------------------------------------------------------------------------

    // Muestra los cursos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        // Cargamos los datos del localStorage Ó que nos devuelva un arreglo vacio (si no hay nada)
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    });

}

// Funciones
function agregarCurso(e){
    e.preventDefault();
    // Podremos ejecutar está función solamente cuando el elemento tenga la Clase de .agregar-carrito
    if (e.target.classList.contains('agregar-carrito')){
        // Ahora buscaremos desde el botón para saber el contenido de la card con Traversin the DOM
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


// 120. Eliminar un Curso del Carrito ----------------------------------------------------------------
// Elimina un curso del carrito
function eliminarCurso(e) {
    
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarrito por el data-id
        // Con filter nos devolverá solo los que buscamos, entonces buscaremos todos excepto
        // el que borramos, es como si seleccionaramos todos excepto ese para eliminarlo.
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        console.log(articulosCarrito);

        // Ahora actualiamos la lista del carrito
        // Iterar sobre el carrito y mostrar su HTML
        carritoHTML(); 
    }
}
// ---------------------------------------------------------------------------------------------------

// 116. Leer los datos del curso que seleccionamos. 

// Lee el contenido del HTML al que le dimos click y extrae la información del curso.
function leerDatosCurso(curso){
    
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // 119. Actualizar la cantidad de Elementos si el elemento ya existe --------------------------

    // Revisa si un elemento ya existe en el carrito
    // Utiliaremos .some que nos permite iterar sobre un arreglo de objetos y verificar si
    // un elemento existe en el.
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    console.log(existe);

    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            // Si es que existe un curso con el mismo id que el que seleccionamos
            if(curso.id === infoCurso.id){
                // Modificamos la cantidad del objeto
                curso.cantidad +=1;
                // curso.cantidad +++;
                // Lo retornamos modificado
                return curso;
            } else {
                // Si no retornamos el objeto como está
                return curso;
            }
        });

        // Finalmente actualizamos el valor de la cantidad de la lista de los cursos
        articulosCarrito = [...cursos];
        
    } else {
        // Agregando elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    // ----------------------------------------------------------------------------------------


    // Agregando elementos al arreglo de carrito
    // articulosCarrito = [...articulosCarrito, infoCurso]; // Se utilizo en la clase 119
    console.log(articulosCarrito);
    carritoHTML();
    
    // 121. Vaciar el Carrito de compras-------------------------------
    vaciarCarritoBtn.addEventListener('click', () => {
        // Reseteamos el arreglo
        articulosCarrito = [];
        // Reseteamos el localStorage
        localStorage.removeItem('carrito');
        // Eliminamos todo el HTML que muestra los productos en la lista del carrito
        limpiarHTML();
    });
    // ---------------------------------------------------------------------------------
}



// 117. Mostrando en el Carrito el cruso seleccionado

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el HTML (por que si no solo agregará y agregará contenido cada vez que agregemos un elemento)
    limpiarHTML();


    //Recorre el carrito y generá el HTML
    articulosCarrito.forEach( curso => {

        // Si vemos que nuestro codigo ya funciona bien, podemos utilizar destructuring para mejorarlo
        // en vez de llamar a los atributos del objeto curso como "curso.titulo", haremos un destructuring
        // de ese objeto en variables.
        const {imagen, titulo, precio, cantidad, id} = curso;

        // Crearemos la fila de una tabla
        const row = document.createElement('tr');
        // Dentro de esa fila de html insertaremos columnas directamente en HTML
        row.innerHTML = `
            <td><img src=${imagen} id="img-${titulo}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <th><a href="#" id="borrar-curso" class="borrar-curso" data-id="${id}"> X </a></th>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al Storage
    sincronizarStorage();


}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    // lo haremos mejor con un while para optimizar
    // Si ese contenedorCarrito tiene al menos 1 elemento dentro este codigo se seguira ejecutando
    // una vez es limpiado todo el HTML dentro de este contenedorCarrito ya no se ejecuta
    while(contenedorCarrito.firstChild){
        // Vamos removiendo de uno en uno cada uno de los hijos/elementos de este contenedor
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

        // Ejemplo:
        // <div class="padre">
        //     <div class="hijo"></div> // 1ro en eliminar
        //     <div class="hijo"></div> // 2do en eliminar
        //     <div class="hijo"></div> // 3ro en eliminar
        // </div>

        // Al eliminar todos los hijos se dejará de ejcutar el while

        // Está forma es mucho más rápida que limiar con innerHTML. La diferiencia si es muy notoría
    }
}
