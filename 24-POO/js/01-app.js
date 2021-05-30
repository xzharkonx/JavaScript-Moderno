// # 164.Definiendo e Instanciando una Clase

// * Class Declaration
class Cliente {

    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const luis = new Cliente('Luis', 5000);
console.log(luis);
console.log(luis.nombre);


// * Class Expresion
// ? No es tán común
// const Cliente2 = class {
    // constructor(nombre,saldo){
    //     this.nombre = nombre;
    //     this.saldo = saldo;
    // }
// }

// const luis2 = new Cliente2();