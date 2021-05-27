
// # 156. Creando un Prototype

// * Object Constructor
// - Es un objeto reutilizable

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// ## Agregando funciones al tipo de objeto Cliente esclusivas para las instancias de este objeto
// - Definimos un nuevo proto igual a una función.
// - Pero en este caso tiene que ser con function (y no arrow function).
// ! Eso es porque estas funciones [function] buscan en el mismo objeto, mientras
// ! que en el [arrow function] se va a ir hacia la ventana global y nos marcará undefined.
// ! cuando busquemos los atributos con this.atributo
// ? Puedes utilizar un arrow funtion siempre y cuando no hagas referencia a un this.atributo

Cliente.prototype.tipoCliente = function (){
    // console.log(`Desde mi nuevo proto`);
    // console.log(this.saldo);

    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Platinum';
    } else if (this.saldo > 5000) {
        tipo = 'Gold';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

// ## Creamos otra función en el prototype Para el objeto Cliente.
Cliente.prototype.nombreclienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

// ! Este arrow functon no servira con this.atributo
// !! Cliente.prototype.nombreclienteSaldo = () => `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;

// ## Creamos otra función en el prototype Para el objeto Cliente.
// Cliente.prototype.retirarSaldo = function(retira) {
//     this.saldo -= retira; 
// }

// !! Este arrow function no funcionará porque no necesita acceder a los atributos del objeto.
// Cliente.prototype.retirarSaldo = retira => this.saldo -= retira; 

// ! Este arrow function si funcionará porque no necesita acceder a los atributos del objeto.
Cliente.prototype.retirarSaldo = (cliente,retiro) => cliente.saldo -= retiro; 
Cliente.prototype.saludo = "Hola mundo";

// ## Instanciarlo

const Eduardo = new Cliente(`Luis`, 15000);
console.log(Eduardo);

// * Utilizamos la función el prototype
console.log(Eduardo.tipoCliente());
console.log(Eduardo.nombreclienteSaldo());

// * Para que un arrow función funcione y sepa a que valor de que objeto
// * modificarle sus atributos, es mejor pasarselo.
Eduardo.retirarSaldo(Eduardo, 10000); 

console.log(Eduardo.nombreclienteSaldo());
console.log(Eduardo.saludo);
