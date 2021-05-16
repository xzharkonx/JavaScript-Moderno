
// # 223. Intersection Observer.

// ? Nos permite identificar un elemento una vez que es visible 
// ? en el viewport del navegador.
// ! Es muy similar a .getBoundingClientRect(), de Sección 14.
// ! 110. Eventos al dar scroll con el mouse.

// ? Pero está es una Api de JavaScript Nativa.

// * Ejemplo. Algún muy común para lo que se utiliza es para 
// * aplicar un scroll infinito o también para agregar por ejemplo
// * agregar el lazy loading a algunas imagenes.


// * Cuando este listo el documento vamos a registrar nuestro observer.
document.addEventListener('DOMContentLoaded', () => {

    // * Utilizaremos la Api IntersectionObserver
    // ? Se le pasa un arrow function.
    // ? Toma una variable que se conoce como entries.
    const observer = new IntersectionObserver( entries => {
        
        // ? entries será un parametro que viene a ser un nodo
        // ? que le pasemos como argumento a una función que ejecuta el Observer

        // ? entries nos va a reportar muchas cosas, pero nos interesa
        // ? lo primero, por eso elegimos la primera posición.

        // ? Aquí nos ira reportando cuando el elemento este visible o no.
        // console.log(entries[0]);

        // Si se intercepta
        if(entries[0].isIntersecting) {
            console.log('Ya está Visible.');
        }else {
            console.log('No está Visible.');
        }

    });
    
    // * El método de arriba solo crea al Observer
    
    // ? Tenemos que decirle cuál es el elemento que vamos a observar
    // ? Lo haremos con el método de .observe()
    observer.observe(document.querySelector('.premium'));

    // Este es el que nos irá enviando los datos cada ve que sea visible o no.


});