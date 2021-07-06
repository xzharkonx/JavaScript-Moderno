
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', cargarApi);

async function cargarApi(){

    try {
        
        const apiJava = 'http://localhost:8080/v1/personas'

        fetch(apiJava)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado))

        // resultado.forEach(p => {
        //     console.log(p.idPersona, p.nombre);
        // });

    } catch (error) {
        console.log(error);
    }

}