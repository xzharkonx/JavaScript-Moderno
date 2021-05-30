// # 165. Métodos y Métodos estaticos en las Clases


// * Class Declaration
class Cliente {

    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // ## Método de instancia.
    // ? Está aparecerá en el Prototype.
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // ## Propiedades estáticas / Método estático.
    // ! Está NO aparecerá en el Prototipe.
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const luis = new Cliente('Luis', 5000);
console.log(luis);
console.log(luis.nombre);
console.log(luis.mostrarInformacion());

// Método estático
console.log(Cliente.bienvenida());

// * Class Expresion
// ? Todo lo de arriba funciona igual para la Class Expresion