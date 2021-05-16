
// # 231. Consultar e Imprimir los Resultados de una API.

const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = ``;

    datos.forEach( perfil => {
        const {author, post_url} = perfil;
        
        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
}