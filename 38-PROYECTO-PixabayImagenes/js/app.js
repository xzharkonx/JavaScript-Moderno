
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

// ? Para mostrar n número de páginas
const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {

    formulario.addEventListener('submit', validarFormulario);

}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === '') {
        // console.log('Agrega un término de búsqueda');
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje){
    

    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta){

        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 
            'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }


}

function buscarImagenes(){

    const terminoBusqueda = document.querySelector('#termino').value;

    const key = '21289517-5af842cb8e92da4d99a7697ba';
    // const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=100`;
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    // ? Para comprobar que la url es correcta, lo que nos salga
    // ? lo pegaremos en alguna otra pestaña y comprobar los datos que nos devuelve
    // console.log(url);

    // ! Revisaremos la documentación de la API para traer nuestras imagenes.
    // ! Veremos que tenemos un metodo .hits que nos las devuelve (un array de objetos).

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {

            // * Páginación
            // resultado.totalHits: mostrará el total de imágenes
            // Nos devolverá el total de páginas que hará a partir
            // del total de elementos entre los que queremos mostrarAlerta.
            totalPaginas = calcularPaginas(resultado.totalHits);
            // console.log(totalPaginas);
            // * Mostrando imagenes
            mostrarImagenes(resultado.hits);
        })

}

// * Generador que va a registrar la cantidad de elementos de acuerdo a las páginas.
// ? Se le pasa el total de páginas obtenido.

function *crearPaginador(total){
    // Total del número de páginas
    console.log(total);
    for(let i = 1; i <= total; i++) {
        // console.log(i); // ? Enumeración de páginas.
        yield i;

        // ? Cada página será un elemento del iterador
        // ? cada vez que se utilice .next() irá al siguiente.
        // ? Así también sabremos si a acabado o no de recorrerlos.
    }
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes) {
    
    // Miramos como está compuesta la información.
    // Vemos que trae un arreglo de objetos con las imagenes.
    console.log(imagenes);
    

    // Limpiaremos el HTML eliminando los resultados previos de búsqueda.
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    // Iterar sobre el arreglo de imagenes y construir el HTML.
    imagenes.forEach(imagen => {

        // Obtenemos el objeto y lo destructuramos.
        const { previewURL, likes, views, largeImageURL } = imagen;

        // ! Agregaremos HTML de la forma fácil pero poco eficiente.
        
        // * Observación en los enlaces:
        // ? Se dice que target="_blank" es una vulnerabilidad subestimada, por lo tanto se soluciona
        // ? colocandole adicionalmente rel="noopener noreferer" al enlace a.
        // ? De esta forma no habrá problema de seguridad.

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>

                        <a 
                            class=" block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferer"
                            >
                                Ver Imagen
                        </a>

                    </div>

                </div>
            </div>
        `;
    });

    // * Limpiar el paginador previo
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    // * Generamos el nuevo HTML de páginación
    imprimirPaginador();
}

function imprimirPaginador() {
     iterador = crearPaginador(totalPaginas);

    // ? Nos traerá el valor registrado del iterador con el yield.
    // console.log(iterador.next());
    // ? Nos dirá si ya termino de leer todos los registros: true/false
    // console.log(iterador.value());
    // console.log(iterador.done());

    while(true) {

        // ? Destructuraremos los resultados de ir al sigiente elemento
        // ? en el generador, así obtendremos el valor de la página
        // ? y también si ya a terminado de recorrerlos o no. 
        const { value, done} = iterador.next();

        // Si ya termino de leer los elementos entonces termina.
        if (done) return;

        // Caso contrario, genera un botón por cada elemento en el generador.
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value; // ? Será valor 1,2,3,4...de cada página.
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'y-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');

        boton.onclick = () => {
            paginaActual = value;

            // * Volvera a consultar la API.
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);


    }
}