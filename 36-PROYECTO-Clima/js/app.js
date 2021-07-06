
// # Sección 36. PROYECTO. API de Clima con Fetch API.

// * Link de la API: https://openweathermap.org/
// ? - Crearse una cuenta.
// ? - Ir a la sección de API key dentro de la cuenta de usuario.
// ? - Generar una nueva  key para el proyecto.

// * Proyecto
// ? En nuestro formulario, el select debe tener en el valor de
// ? las opciones el nombre del país a 2 digitos para que la
// ? API pueda leer y saber a que país nos referimos.

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


// Otra forma ejecutar cuando carga, solo que este es en
// window y el otro es en el document.addEventListener('DOMCotentLoaded)
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})


function buscarClima(e){
    e.preventDefault();

    // console.log('Buscando el clima');

    // ## Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    // console.log(ciudad);
    // console.log(pais);

    if(ciudad === '' || pais === ''){

        // Hubo un eror
        mostrarMensaje('Ambos campos son obligatorios','error')
        return;
    } else{
        mostrarMensaje('Datos correctos')
    }

    // ## Consultariamos la API
    consultarAPI(ciudad, pais);
}

function mostrarMensaje(mensaje,tipo = '') {
    
    const alerta = document.querySelector('.bg-red-100');

    if (tipo == 'error' && !alerta) {
        // console.log(mensaje);
        // Crear una alerta
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
            'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);

        // Se elimine la alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);
        
    } else if( !alerta) {
        // console.log(mensaje);

                // Crear una alerta
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-green-100', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded',
            'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Enviando consulta...</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);

        // Se elimine la alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);

    }
}

function consultarAPI(ciudad, pais) {

    // Aquí colocaremos la API key que la página nos genero
    const appID = '15e506e8d9824051ef3b484f21dc9069';
    // Ahora tenemos que colocar y acomodar los datos como la API
    // los necesita para que pueda funcionar.
    // Usaremos la siguiente pág: https://openweathermap.org/api
    // En la primera opción se basará este enfoque.

    // ? URL para consumir la API: api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
    
    console.log(url); // Podemos copiar lo que no sale y luego pegarlo en una nueva pestaña
    // para ver la estructura de los datos que nos devuelve y así poder tomar lo que necesitamos.
    
    // Muestra un Spinner de carga

    spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            
            // Limpiamos el HTML previo porque si encontro algo.
            limpiarHTML();

            if(datos.cod === '404') {
                mostrarMensaje('Ciudad no encontrada', 'error');
                return;
            }

            
            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })

}   


function mostrarClima(datos) {
    const {name, main: { temp, temp_max, temp_min }} = datos;

    // De Grados Kelvin a Centigrados hay que restarle -273.15
    // console.log(temp - 273.15);
    
    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('P');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');
    
    const actual = document.createElement('P');
    // Utilizamos innerHTML para usar la entidad &#8451; que representa el simbolo de G. Centigrados.
    actual.innerHTML = `${centigrados} &#8451;`
    actual.classList.add('font-bold', 'text-6xl');
    
    const tempMaxima = document.createElement('P');
    // Utilizamos innerHTML para usar la entidad &#8451; que representa el simbolo de G. Centigrados.
    tempMaxima.innerHTML = `Temp. Max: ${max} &#8451;`
    tempMaxima.classList.add('text-xl');
    
    const tempMinima = document.createElement('P');
    // Utilizamos innerHTML para usar la entidad &#8451; que representa el simbolo de G. Centigrados.
    tempMinima.innerHTML = `Temp. Min: ${min} &#8451;`
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    resultado.appendChild(resultadoDiv);

}

// Function Helper: Hace una sola acción y es muy compacta.
const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner() {
    
    limpiarHTML();

    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}