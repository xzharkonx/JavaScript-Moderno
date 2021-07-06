
// # 306. Costructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre= nombre;
        this.email = email;
    }
}

// * Creamos el objeto Cliente y heredamos de la
// * Clase Persona

class Cliente extends Persona{
    constructor(nombre,email, empresa) {
        super(nombre,email);
        this.empresa = empresa;
    }

}

const persona = new Persona('Luis', 'xzharkonx@gmail.com');
console.log(persona);
const cliente = new Cliente('Eduardo', 'cliente@cliente.com', 'systemwoork' );
console.log(cliente);