
// # Variables
// ## Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

let editando;

// ## UI / Formulario
const formulario = document.querySelector('#nueva-cita');

const contenedorCitas = document.querySelector('#citas');


// # Clases
class Citas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI {

    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM 
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar la alerta después de 5 Segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    // !! Sin destructuring del Objeto Citas
    // imprimirCitas(citas){
    // ? Con destructuring del Objeto Citas.
    // ? Esto nos permitira acceder al array de citas que es una propiedad de la Clase Citas.
    // ? Es como si accedieramos directamente a ese array.
    imprimirCitas({citas}){
        // const { citas } = citas; // ? Con destructuring nos evitariamos está línea.
    
        // Limpiamos el HTML primero.
        this.limpiarHTML();


        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scriptig de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;
            
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
            `;


            // Botón para eliminar está cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            // btnEliminar.innerHTML = 'Eliminar &times;';
            
            // ? Le agregamos un icono al botón de eliminar de:
            // ? https://heroicons.dev/?query=x

            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6"'+
            'fill="none" stroke="currentColor" viewBox="0 0 24 24" '+
            'xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"'+
            ' stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';

            btnEliminar.onclick = () => eliminarCita(id);

            // Añade un botón para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none"'+
            ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"'+
            ' d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">'+
            '</path></svg>';

            btnEditar.onclick = () => cargarEdicion(cita);


            // Agregar los parragos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);

            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);

        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

// ## Instancia de Clases
const ui = new UI();
const administrarCitas = new Citas();


// Registrar eventos
// # Listeners
eventListeners();
function eventListeners(){
    // mascotaInput.addEventListener('change',datosCita); // Al cambiar entre inputs.
    mascotaInput.addEventListener('input',datosCita); // En tiempo real.
    propietarioInput.addEventListener('input',datosCita); // En tiempo real.
    telefonoInput.addEventListener('input',datosCita); // En tiempo real.
    fechaInput.addEventListener('input',datosCita); // En tiempo real.
    horaInput.addEventListener('input',datosCita); // En tiempo real.
    sintomasInput.addEventListener('input',datosCita); // En tiempo real.
    
    formulario.addEventListener('submit', nuevaCita);
}



// # Objetos
// ## Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// # Funciones
// ## Agrega datos al objeto de cita
function datosCita(e){
    
    // ? Utilizaremos los corchetes para acceder al atributo o propiedad del Objeto
    // ? para referirnos a esa variable según sea el input.
    citaObj[e.target.name] = e.target.value;
}

// ## Válida y agrega una nueva cita a  la Clase de Citas
function nuevaCita(e){
    e.preventDefault();

    // Extraer la información del Objeto de cita.
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar

    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora ==='' || sintomas === ''){
        console.log('Todos los campos son obligatorios');
        ui.imprimirAlerta(`Todos los campos son obligatorios`, `error`);
        return;
    }


    if(editando){
        // console.log('Modo Edición');
        ui.imprimirAlerta('Editado correctamente');

        // Pasando el objeto de la cita a edición
        administrarCitas.editarCita({...citaObj});

        // Regresar el texto del botón a su estado original.
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        // Para que se reinicie el formulario a modo Creación de una nueva cita.
        editando = false;

    }else {
        // console.log('Modo Nueva Cita');
        // Generar un id único.
        citaObj.id = Date.now();

        // Creando una nueva cita.
        // ! De esta forma tendremos un Error de Objeto repetido porque apunta a la misma referencia.
        // administrarCitas.agregarCita(citaObj); 
        // ? Haremos una copia del objeto para eliminar su referencia
        administrarCitas.agregarCita({...citaObj});

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente');
    }

    // Reiniciar el objeto para la validación.
    reiniciarObjeto();

    // Reiniciar el formulario.
    formulario.reset();

    // Mostrar el HTML de las citas.
    ui.imprimirCitas(administrarCitas);
}


function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){

    // Eliminar la cita.
    administrarCitas.eliminarCita(id);

    // Muestra un mensaje.
    ui.imprimirAlerta('La cita se eliminó correctamente');
    
    // Refrescar las citas.
    ui.imprimirCitas(administrarCitas);

}


// Carga los datos y el modo edción.
function cargarEdicion(cita){
    const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto de información.
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}