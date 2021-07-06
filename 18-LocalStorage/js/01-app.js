
// * 141. Primeros Pasos con Local Storage

// ? localStorage Solo alamacenará datos en 1 solo navegador, si utilizas varios
// ? tendrás distintos datos dependiendo de lo que hayas hecho en cada navegador

// ? - Local Storage: Tus datos permanecen aún cuando apagas tu computadora.
// ? - Session Storage: Tus datos permanecen hasta que cierras la ventana del navegador.

// ? En automatico lo que le pasemos lo convertira a String.

// localStorage.setItem('nombre', 'Luis');
// sessionStorage.setItem('nombre', 'Luis');

const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 380
    

}

console.log(producto);

// ! No podemos guardar objetos ni podemos guardar Strings =/
// localStorage.setItem('producto', producto );

// !! Pero si podemos hacer lo siguiente.
// ? Convertiremos ese objeto a String con la siguiente función.
const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString );

console.log(typeof producto); // object
console.log(producto); // El objeto como tal.
console.log(typeof productoString); // string
console.log(productoString); // {"nombre":"Monitor 24 Pulgadas","precio":380}

// ? Lo mismo podemos hacer para los arreglos

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString);

console.log(typeof mesesString); // string
console.log(mesesString); // ["Enero","Febrero","Marzo"]