
// # Object Contructor
// * Constructores

// ## Constructor del Objeto Seguro para los datos.
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// ## Realiza la cotiación con los datos
Seguro.prototype.cotizarSeguro = function() {
    /*
     *   1 = Americano 1.25
     *   2 = Asiatico 1.05
     *   3 = Europeo 1.35
    */

    // ## Costo del Seguro en base a la marca.
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;        
            break;

        case '2':   
            cantidad = base * 1.05;        
            break;

        case '3':
            cantidad = base * 1.35;        
            break;
        default:
            break;
    }

    // ## Costo del Seguro en base al año.

    // - Leer el año
    const diferiencia = new Date().getFullYear() - this.year;
    console.log(diferiencia);
    // ! Cada año la diferiencia es mayor, el costo va a reducirse un 3%
    // ! el valor del seguro. Se restará el porsentaje obtenido a la cantidad total.
    ////   %    $   
    //// 100% | 2...
    ////   3% | x   
    
    //         n°_años=1 * 3 = 3%  *   $2...   / 100
    cantidad -= ((diferiencia * 3) * cantidad) / 100;
    console.log(cantidad);

    // ## Costo del Seguro en base al tipo.

    /*
     * Si el seguro es básico se multiplica por un 30% más.
     * Si el seguro es completo se multiplica por un 50% más.
     */

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}

// ## Constrctor del Objeto de la interfaz de usuario.
function UI(){}


// ## Lena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');
    
    for(let i  = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }

}

// ## Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error'); // ? Está clase ya esta en css
    } else {
        div.classList.add('correcto'); // ? Está clase ya esta en css
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // ? Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resulado'));

    // ? Desaparecemos el mensaje
    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total,seguro) => {

    const {marca, year, tipo} = seguro;

    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
    
        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo de seguro: <span class="font-normal" capitalize> ${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');


    // - Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // !! Se oculta el spinner.
        resultadoDiv.appendChild(div); // ? Se muestra el resultado.
    }, 3000);
}

// ## Instanciar UI
const ui = new UI();
console.log(ui);
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // ? Llena el Select con los años.
})


// # Listeners
eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

// # Functions

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    
    // Leer cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){

        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    
    ui.mostrarMensaje('Cotizando...', 'exito');

    // ## Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados) {
        resultados.remove();
    }


    // ## Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);

    // ? Utilizar el prototype que va a cotizar.
    // ? Obtenemos el total de la cantidad cotizada con el método
    // ? del prototipe en el objeto.
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(total,seguro);

}

