
// # Proyecto: Cotizador de Criptomonedas

// ? Enlace general:
// https://min-api.cryptocompare.com/documentation
// ? Enlace especifico. Las mejores criptomonedas:
// https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD

const formulario = document.querySelector('#formulario');
const monedaSelect = document.querySelector('#moneda');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const resultado = document.querySelector('#resultado');


const objBusqueda = {
    moneda: '',
    criptomoneda : '',
}

// Crear un Promise
// Este promise es redundante y se puede quitar. Solo es de ejemplo.
const obtenerCriptomonedas = criptomonedas => new Promise (resolve => {

    resolve(criptomonedas);

});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// ## Consultando las criptomonedas disponibles

function consultarCriptomonedas() {

    // ? Esto nos dará las 10 criptomonedas de mayor valor que utilizan los usuarios
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data)) // Promise de ejemplo.
        .then(criptomonedas => selectCriptomonedas(criptomonedas)) // Aquí esta lo bueno.
}

// ? Agregará la información de las 10 criptomonedas más conocidas
// ? al select del formulario
function selectCriptomonedas(criptomonedas) {

    // Miramos la info que contiene para destructurarla.
    // console.log(criptomonedas);

    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });

}

// ## Agregará al objeto los valores que le hayamos colocado
function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

// ## Enviando la información y obteniendo los resultados.
function submitFormulario(e) {
    e.preventDefault();

    // validar
    const { moneda, criptomoneda } = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // * Consultar la API con los resultados.
    consultarAPI();

}

function mostrarAlerta(mensaje){
    

    const existeError = document.querySelector('.error');

    if(!existeError){

        const divMensaje = document.createElement('p');
        divMensaje.classList.add('error');
    
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }


}


function consultarAPI() {

    // ? Objeto que almacena la información del formulario.
    const { moneda, criptomoneda } = objBusqueda;

    // ? Solo la cotización
    // const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`
    // ? Más información...
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    // * Mostramos un spinner en lo que carga la información
    mostrarSpinner();

    // Consultando la información
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            // console.log(cotizacion);
            console.log(cotizacion.DISPLAY);
            
            // ? Para acceder a las propiedades de forma dinámica
            // ? se las pasaremos en la misma declaración como variables de un array.
            // console.log(cotizacion.DISPLAY[criptomoneda][moneda]);
            // ? Nos devolvera un objeto que podremos destructurar.
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);

        })
}

function mostrarCotizacionHTML(cotizacion) {

    
    // ? Limpiamos el HTML previo de la información
    limpiarHTML();
    
    // ? Es recomendable revisar los valores que nos envia la API
    // ? para destructurar la información.
    // console.log(cotizacion);

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;
    
    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;
    
    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas 24 Horas: <span>${CHANGEPCT24HOUR} %</span>`;
    
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Última Actualización: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

}

function limpiarHTML() {
    while(resultado.firstChild){

        resultado.removeChild(resultado.firstChild);
    }
}


function mostrarSpinner() {

    // Limpiamos la información previa si la hay.

    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);

    // * Solo para ver mejor el Spinner
    // Podemos ir a las herramientas de desarrolador en
    // el navegador.
    // Luego buscaremos la parte de networking.
    // Dentro de este apartado habrá un Select con
    //     - No throttling u Online: Este estará por default
    // Habrá que cambiarlo a 
    //     - Slow 3G
    // Esto hará que la conexión sea lenta y nos deje ver
    // adecuadamente el spinner
    // Despues ya podremos dejarlo a como estaba.


}