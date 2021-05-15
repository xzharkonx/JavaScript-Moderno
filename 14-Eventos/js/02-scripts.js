
// # 107. Eventos con el MouseEvent.

const nav = document.querySelector('.navegacion');

// registrar un evento - Cuando hacemos click
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegación');
    
    // Cambiando algunos estilos
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegación');
    
    // Cambiando algunos estilos
    nav.style.backgroundColor = 'transparent';
});

// ## Ejemplo on funciones tipo Flecha
// Presionado del mouse
nav.addEventListener(`mousedown`, () => console.log('Precionando el botón'));
nav.addEventListener(`mouseup`, () => console.log('Soltando el botón'));

// ## Ejemplo con funciones normales
// Doble clic
nav.addEventListener(`dblclick`, dobleClick );

function dobleClick() {
    console.log('Doble click')
}