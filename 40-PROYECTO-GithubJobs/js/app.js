const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {

    formulario.addEventListener('submit', validarBusqueda);

})

function validarBusqueda(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;
    // console.log(busqueda);

    if(busqueda === '' ) {
        mostrarMensaje('Busqueda sin información... Añade más información');
        return;
    }

    consultarApi(busqueda);
}

function mostrarMensaje(msg) {

    const alertaPrevia = document.querySelector('.alerta');
    
    // console.log(msg);
    // console.log(alertaPrevia);
    
    // ?  Si no existe la alerta creala
    if(!alertaPrevia) {
        
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = msg;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        },3000);
    }

}

function consultarApi(busqueda) {

    // Esta será nuestra URL:
    // const githubUrl = `https://jobs.github.com/positions.json?search=java&location=mexico`;
    const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`;

    // !! ERROR DE ACCESO
    // Mira que si intentamos acceder a los datos nos saldrá un error de:
    // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    
    // CORS: Intercambio de recursos de origen cruzado
    // Básicamente el error que tenemos es que tratamos de consumir una API que está en otro dominio
    // es decir, el que nos sale de 127.0.0.1 que es el nuestro.
    // Entonces como nosotros tratamos de acceder a esa API no podremos porque está protegida
    // por el backend de donde obtendremos los datos.

    
    // ! Para solucionar el error de abajo utilizaremos esta URL 
    // ! que es un proxy (es 100% seguro). 
    
    // * Le pasaremos una funcion que se llama encodeURIComponent()
    
    // ? Es nativa de JS. Será como cifrar pero solo le aplicará un encoding a la URL que le estaremos
    // ? pasando y a esta le pasamos la URL a la que queremos aplicarle el proxy.

    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githubUrl)}`;

    // ? Y ahora si nos aparecerán los resultados.

    // * Utilizaremos axios en vez de fetchAPI - axios() 
    // ? Se puede utilizar sin especificar, pero es mejor especificar.
    // ? La información traida como es texto plano la convertiremos a JSON
    
    axios.get(url)
        .then(respuesta => mostrarVacantes(JSON.parse(respuesta.data.contents)));

}

function mostrarVacantes(vacantes) {

    // * Removemos los datos anteriores
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    // Mostrar vacantes para ver lo que tenemos.
    console.log(vacantes);

    if(vacantes.length > 0) {

        resultado.classList.add('grid');

        vacantes.forEach(vacante => {

            // Destructuramos la vacante
            const { company, title, type, url, description } = vacante;

            // * Le agregamos la información.
            resultado.innerHTML += `
            <div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>  
            `;

            // ! Podemos agregar la descripción arriba en el HTML.
            // ! Pero se quito porque suele ser larga.
            // <p class="font-bold uppercase">Descripción:   <span class="font-light normal-case">${description} </span></p

        });
        
    } else {
        console.log('no hay resultados');
        const noResultado = document.createElement('P');
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full');
        resultado.classList.remove('grid');
        noResultado.textContent = 'No hay vacantes, intenta con otro término de búsqueda';
        resultado.appendChild(noResultado);
    }


}