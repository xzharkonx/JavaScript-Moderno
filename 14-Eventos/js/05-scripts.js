
// #  110. Eventos al dar scroll con el mouse

// ? Muchos de estos eventos se dan en la ventama principal
// console.log(window);

// ## Eventos
// - scroll
// - scrollBy
// - scrollTo
// - scrollX
// - scrollY

// ## scroll
// * Cada vez que hagamos scroll, se va a ir ejecutando este console.log
// window.addEventListener('scroll', () => console.log('scrolling'));

// * Para detectar Scroll Vertical
// window.addEventListener('scroll', () => {
// ?  Declaramos una variable para indicar los pixeles que estamos recorriendo
//     const scrollPY = window.scrollY;
//     console.log(scrollPY);
// });

// * Para detectar Scroll Horizontal
// window.addEventListener('scroll', () => {
// ?  Declaramos una variable para indicar los pixeles que estamos recorriendo
//     const scrollPX = window.scrollX;
//     console.log(scrollPX);
// });


// ## Algunos ejemplos
window.addEventListener('scroll', () => {

    // Buscamos un elemento en el DOM
    const premium = document.querySelector('.premium');
    
    // * Ahora utilizaremos una variable que nos dará información acerca del elemento seleccionado
    // * Con la función .getBoundingClientRect() obtenemos del elemento la siguiente información.
    
    // ? - A que distancia se encuentra ese elemento, es decir, si estamos hasta arriba, nos dirá
    // ?   cuandos pixeles nos hace falta para llegar a ese elemento.
    // ? - La Altura, La Anchura y Sus coordenadas.
    
    const ubicacion = premium.getBoundingClientRect();
    
    // ? Podemos DEBUGGEAR con está variable la ubicación y atributos del elemento
    // console.log(ubicacion);

    // * Si estamos scrolleando de arriba hacia abajo o viceversa, si nos encontramos a una distancia
    // * de 317 pixeles ya sea desde arriba o desde abajo del elemento, nos mandará el mensaje
    // * Esto dependerá del rango que tenga el elemento.
    
    // ? Digamos que la posición del elemento es 0.
    // ? y que si estamos arriba nos dará valores positivos, que iremos disnuyendo al 0 
    // ? cuando vayamos bajando acercandonos al elemento.
    // ? O bien si estamos abajo nos dará valores negativos, que iremos disminuyento al 0.
    // ? cuando vayamos subiendo acercandonos al elemento.

    if (ubicacion.top < 317 && ubicacion.top > -482) {
        console.log('El elemento ya está visible');
    }else{
        
        console.log('El elemento NO es visible');
        console.log(ubicacion);
    }

    // ! Esto nos servirá para crear efectos, animaciones o cualquier cosa cuando estemos a una
    // ! determinada posición de algún elemento.
    // ! Incluso para saber que tanta atención le pone el usuario a un elemento


});