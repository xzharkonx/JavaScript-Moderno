
// # 230. Consultar e Imprimir los resultados de un Fech.

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then( respuesta => respuesta.json()) // Retornamos la respuesta en tipo JSON.
        .then(resultado => { resultado.forEach(e => console.log(`
        
                            ID: ${e.id},
                            Nombre: ${e.nombre},
                            Empresa: ${e.empresa},
                            Trabajo: ${e.trabajo}

                            `))
                        
                        mostrarHTML(resultado);

                        }
        );
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = ``;

    empleados.forEach( empleado => {
        const {empresa, id, nombre, trabajo} = empleado;
        
        html += `
            <p>ID: ${id}</p>
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `
    });

    contenido.innerHTML = html;


}