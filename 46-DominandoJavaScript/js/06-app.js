
// # 292. new Binding

// ? Es lo que se conoce como programación orientada a 
// ? objetos en versiones anteriores de JS.

function Auto(modelo, color) {
    
    // * Estos serán los new Binding.
    this.modelo = modelo;
    this.color = color;

}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// # Window Binding

// ! Agregamos este dato a la ventana
window.color = 'negro';
function hola() {
    console.log(color);
}

// !! Macará que el color no esta definido.
// ! Pero como hemos definido esa variable en window
// ! no nos saldrá error.
hola(); 

// ? Cuando llamas a una variable JS manda a llamar
// ? a la ventana global window.

// ? Entonces si no encuentra esa variable definida
// ? irá a buscarla a la ventana global.