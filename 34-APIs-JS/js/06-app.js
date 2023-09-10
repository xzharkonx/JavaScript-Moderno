
// # 227. Speech APi

// ? Está nos va a permitir que cuando hablemos JavaScript
// ? puda saber o pueda trasladar lo que yo estoy diciendo
// ? en el microfono hacia mi página web

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

// * Debemos de pedir permiso al usuario para que podamos
// * acceder al microfono, "como lo hacen las APIs modernas"
// ! No podemos acceder al microfono si el usuario no a dado permisos.

// ? No muchos navegadores lo soportan.
function ejecutarSpeechAPI() {

    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // * Hay diferentes capas
    // 1.- Arrancar el SpeechRecognition.
    // 2.- Comenzar a escuchar.
    // 3.- Cuando el usuario termina de hablar.
    // 4.- Cuando mostamos el resultado.

    console.log('OK');
    recognition.start();

    // * Está función se ejecutará cuando el recognition empiece a ejecutarse
    recognition.onstart = function() {

        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';

    };

    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    // * Resultados de lo que hayamos dicho

    recognition.onresult = function(e) {
        // console.log(e.results);
        console.log(e.results[0][0]);

        const { confidence, transcript} = e.results[0][0];

        const speech = document.createElement('P');
        speech.innerHTML = `Grabado: ${transcript}`

        const seguridad = document.createElement('P');
        seguridad.innerHTML = `Serteza de entendimiento: ${ parseInt(confidence * 100) } % `;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }

}