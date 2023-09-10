
// * Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// * Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    // ## Validando formulario
    formulario.addEventListener('submit',agregarGasto);

}
// * Clases

class Presupuesto {

    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos,gasto];
        // console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
        
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {

    insertarPresupuesto(cantidad){
        
        // Extrayendo valores.
        const { presupuesto, restante} = cantidad;
        
        // Agregando al HTML.
        document.querySelector('#total').textContent= presupuesto;
        document.querySelector('#restante').textContent= restante;
    }


    imprimirAlerta(mensaje,tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de Error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos) {
        
        // Elimina el HTML previo
        this.limpiarHTML()

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;

            // Crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id',id);
            // ? Nueva forma de hacer un data-id = id (una variable personalizada)
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            
            
            // Agregar el HTML
            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);

            console.log(nuevoGasto);
            
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }


    actualizarRestante(restante ){
        document.querySelector('#restante').textContent= restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        
        // Referencia al div del HTML del presupuesto restante
        const restanteDiv = document.querySelector('.restante');

        // ? Comprobar 25%, si el presupuesto con valor de 25% sigue siendo mayor al restante,
        // ? entonces quiere decir que hasta que el restante sea menor a 25% se abrá gastado
        // ? más o igual al 75%.
        if((presupuesto / 4 ) > restante ){
            // console.log('Ya gastaste el 75%');
            // restanteDiv.classList.remove('alert-warning');
            // Otra forma pero con 2 clases
            restanteDiv.classList.remove('alert-success','alert-warning');
            
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto / 2 ) > restante){
            // restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.remove('alert-success','alert-danger');
            restanteDiv.classList.add('alert-warning');
            
        }else {
            restanteDiv.classList.remove('alert-danger','alert-warning')
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es 0 o menor
        if (restante <= 0){
            ui.imprimirAlerta('El prespuesto se ha agotado.', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
            formulario.querySelector('button[type="submit"]').classList.remove('alert-primary');
            formulario.querySelector('button[type="submit"]').classList.add('bg-dark');
            console.log(formulario.querySelector('button[type="submit"]').classList.contains('bg-dark'));
        }else if(restante >  0 && formulario.querySelector('button[type="submit"]').classList.contains('bg-dark')){
            ui.imprimirAlerta('El prespuesto se ha reembolsado correctamente.');
            formulario.querySelector('button[type="submit"]').disabled = false;
            formulario.querySelector('button[type="submit"]').classList.remove('bg-dark');
            formulario.querySelector('button[type="submit"]').classList.add('bg-primary');
        }
    }
}

// * Instancias
// - Variable para instanciar el Objeto presupuesto.
let presupuesto;

// - Instanciar UI
const ui = new UI();

// * Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    // console.log(parseFloat(presupuestoUsuario));
    // ? También funciona Number(), devolverá NaN si no 
    // ? puede convertir la cantidad.
    // ? Con isNaN devolverá true si la variable es NaN,
    // ? por lo que recargará y volverá a preguntar.
    
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        
        // ? Si no tiene nada, recargará la página.
        window.location.reload();
    }


    // * Instanciamos el Objeto de presupuesto.
    // - Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}


// - Añade gastos
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario.
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    

    // Validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válidad', 'error');
        return;
    }

    // - Generar un objeto con el gasto y además le añadimos una propiedad más id.
    // ! Esto es lo contrario a Destructuring, porque toma las variables como atributos
    // ! para crear el objeto.
    const gasto = { nombre, cantidad, id: Date.now()}
    
    // Añade un nuevo gasto a la lista de este objeto.
    presupuesto.nuevoGasto(gasto);
    
    // Mensaje de todo bien.
    ui.imprimirAlerta('Gasto agregado Correctamente');

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;

    // ? Añade la información del gasto al HTML
    ui.mostrarGastos(gastos);
    
    // ? Añade la información del presupuesto restante al HTML
    ui.actualizarRestante(restante);
    
    // ? Comprueba la información del presupuesto y la cambia de color.
    ui.comprobarPresupuesto(presupuesto);

    // ? Reinicia el formulario.
    formulario.reset();
}

function eliminarGasto(id){
    
    // ? Eliminamos el gasto de nuestra lista de gastos del Objeto presupuesto
    presupuesto.eliminarGasto(id);
    
    // ? Actualizamos la lista en el HTML
    const{ gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    // ? Añade la información del presupuesto restante al HTML
    ui.actualizarRestante(restante);

    // ? Comprueba la información del presupuesto y la cambia de color.
    ui.comprobarPresupuesto(presupuesto);

}