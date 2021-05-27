
// # 157. Heredar un Prototype

// * Object Constructor
// - Es un objeto reutilizable

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// ## Agregando funciones al tipo de objeto cliente esclusivas para las instancias de este objeto
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
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

// * Creamos otra función en el prototype Para el objeto Cliente.
Cliente.prototype.nombreclienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

// * Creamos otra función en el prototype Para el objeto Cliente.
Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira; 
}

// ## Instanciarlo

// const Eduardo = new Cliente(`Luis`, 15000);
// console.log(Eduardo);

// *  Utilizamos la función el prototype
// console.log(Eduardo.tipoCliente());
// console.log(Eduardo.nombreclienteSaldo());
// Eduardo.retirarSaldo(1000); 
// console.log(Eduardo.nombreclienteSaldo());

// ## Creamos un nuevo tipo de objeto llamado Persona
// ? Haremos uso de la herencia para traer 
// ? las propiedades de Cliente.
function Persona(nombre, saldo, telefono){

    // this.nombre = nombre;
    // this.saldo = saldo;
    // * Herencia con Object Constructor
    // ! Heredaremos estos atributos de la Clase Cliente con el metodo call()
    
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// ? Aunque heredemos los atributos de la Clase Cliente no heredaremos sus atributos del prototype
// ? para heredarlos haremos lo siguiente: Le pasaremos todo el prototype de Cliente a Persona.
Persona.prototype = Object.create(Cliente.prototype); // object

// ? Aun así perdimos el constructor de Cliente pero podemos agregarlo de la siguiente forma.
Persona.prototype.constructor = Cliente; // object

// console.log(Cliente); // object constructor
// console.log(typeof Persona.prototype.constructor); // function

// !! Es importante que recuperemos antes el "prototype" y el "constructor" antes de instanciar.

// console.log(typeof Persona.prototype); // object

// * Instanciarlo
const luisEduardo = new Persona(`Luis Eduardo`, 5000, 7122302540);
console.log(luisEduardo);

// * Ahora si podemos hacer uso en la Clase Persona todas las funciones del prototype de la
// * Clase Cliente porque heredamos de ella.

console.log(luisEduardo.nombreclienteSaldo());

// Creamos una función solo para está Clase Persona.
Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es ${this.telefono}`;
}
console.log(luisEduardo.mostrarTelefono());

// - De esta forma podemos tener en programación orientada a objetos algo que se le conoce
// -| como GodObject (Objeto todo poderoso), donde se van heredando todas las demás funciones.