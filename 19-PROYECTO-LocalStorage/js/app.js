// # Variables

// ## Fomrulario de donde se extraerá la información.
const formulario = document.querySelector('#formulario');
// ## Lista en donde se agregarán los tweets al DOM.
const listaTweets = document.querySelector('#lista-tweets');


// ## Arreglo que almacenará todos los tweets.
let tweets = [];


// # Event Listeners
// La mandamos a llamar para registrar nuestros eventListeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        
        // Si no encuentra algún item nos dará null y no queremos eso
        // tweets = JSON.parse(localStorage.getItem('tweets'));
        // Ahí estaremos cargando los archivos Ó crearemos un arreglo vació.
        // esto es para que nos deje un arreglo vació en vez de que nos de null
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        
        // Entonces así ya no nos dará error al quener mostrar en caso de no tener 
        // nada en la lista de tweets
        crearHTML();
        
    });
}


// ## Funciones
function agregarTweet(e){
    e.preventDefault();
    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    // Validación...
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vació.');
        return; // Evita que se ejecuten más líneas de código.
    } 

    const tweetObj = {
        // Tomaremos el tiempo actual como id único
        id: Date.now(),
        // En JS si la variable y el valor de un objetos son iguales
        // se puede colocar solo 1 y seguirá funcionando.
        // texto: tweet // cabiamos el valor de la variable a tweet
        // tweet: tweet // como el valor de la variable y ahora la variable del objeto son iguales
        // podemos solo colocar esto... y dejarla así...
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // ## Una vez agregado vamos a crear el HTML
    crearHTML();

    // ## Reiniciar el formulario 
    // Esto le borará los datos que contenga el formulario.
    formulario.reset();
}

// ## Mostrar mensaje de Error.
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
    // Insertarlo en el  Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    
    // Elimina la alerta despues de 3 Segundos.
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// ## Muestra un listado de los tweets
function crearHTML(){

    // Como solo estamos agregando elementos, 
    // cada vez que agregemos 1, automaticamente
    // se agregarán todos los anteriores
    // por que digamos que toma la [lista del html] (no la de los datos)
    // le añade el elemento y la vuelve unir a la 
    // misma lista que ya estaba. 
    // Por ello hay que limpiar esa lista de primeras. 
    // Haremos lo siguiente.
    limpiarHTML();

    // Si hay algún tweet entonces los mostrará (está es la lista de los datos).
    if(tweets.length > 0){
        tweets.forEach(tweet => {

            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                
                borrarTweet(tweet.id);

            };

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto objeto.valor
            li.innerText = tweet.tweet

            // Asignar el botón
            li.appendChild(btnEliminar);
            
            // Insertarlo en el HTML
            listaTweets.appendChild(li);



        });
    }

    // Agregamos los datos al localStorage
    sincronizarStorage();
}

// ## Agrega los Tweets actuales a LocaStorage
function sincronizarStorage(){
    // Utilizamos la función de JSON.stringify para
    // convertir ese array de objetos a String
    // y que se pueda almacenar satisfactoriamente.
    localStorage.setItem('tweets', JSON.stringify(tweets));
}



// ## Elimina un Tweet
function borrarTweet(id){
    

    // Supongamos que queremos traernos todo "menos los el que eliminamos"
    tweets = tweets.filter( tweet => tweet.id !== id);

    // Volvemos a recrear el HTML
    crearHTML();
    
}



// ## Limpiar el HTML
function limpiarHTML(){
    // Mientras que la lista listaTweets tiene elementos (el primer elemento), entonces...
    while(listaTweets.firstChild){
        // Entonces que remueva el primer hijo que vaya encontrando.
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
