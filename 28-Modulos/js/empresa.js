
// # 197. Heredar una clase que esta siendo importada


// ? Recuerda que cuando importas sin utilizar webpack o React js u Vue, etc,
// ? no es necesario llamar la extención del archivo pero en nuestro caso si.

import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion(){
        return `Empresa ${this.nombre} - Ahorro: ${this.ahorro} - Categoría: ${this.categoria}`;
    }
}