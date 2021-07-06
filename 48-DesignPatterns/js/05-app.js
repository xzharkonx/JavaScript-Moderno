
// # 309. Module

// ## Module Parrent - Forma anterior
// ? Así es como se hacia antes.
// ! Mira que la función anonima se auto ejecuta (fn)() retornando un Objeto
// ! Mira que lo que la variable modulo1 es un Objeto.
const modulo1 = (function(){
    const nombre = 'Eduardo';

    function hola(){
        console.log('Hola');
    }

    return {
        nombre, // Se retorna el nombre.
        hola // Se retorna la función.
    }
})();

console.log(modulo1.nombre); // Es por eso que está es una variable dentro del objeto.
modulo1.hola(); // Es por eso que este es un método dentro del objeto.

// ## Module Parrent - Forma actual 
// ? Este es el más recomendable.

const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente;

// !! Si nos sale error al usar modules
// ? Recuerda que en el HTML tenemos que ponerle
// ? type="module" en donde se llama a este archivo

// Ahora ya podremos importarlo.