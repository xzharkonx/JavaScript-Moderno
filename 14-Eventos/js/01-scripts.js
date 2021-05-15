
// # 106. Detectar cuando el HTML esta listo.

// ? Se utilizará el método addEventListener para capturar los eventos
// ? document.addEventListener('');

console.log(1);

// * El listener más común que vas a utilizar en tus proyectos.
// ? Indicará cuando el documento ya ha sido cargado compleamente.
document.addEventListener('DOMContentLoaded', () => {
    console.log(`Documento Listo`);
    console.log(2);
});

console.log(3);