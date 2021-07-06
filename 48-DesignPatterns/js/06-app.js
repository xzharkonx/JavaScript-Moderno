
// # 310. Mixin Pattern

// ? Supongamos que tenemos una clase para que tenga la forma 
// ? de los datos que vamos a tomar.
// ? Tenemos algunas funciones externas que vamos a compartir 
// ? entre diferentes clases.

class Persona { 
    constructor(nombre, email) {
        this.nombre= nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformación(){
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre= nombre;
        this.email = email;
    }
}

// * La idea de los Mixins
// ? Es que puedes crear un objeto con múltiples 
// ? funciones, tener alguna clase y si llegas a
// ? tener otra clase, también puedas añadirle las
// ? funciones que tienes en este objeto para que
// ? se combinen.

// ? La forma en que los vamos a agregar es utilizando
// ? ObjectAssing

// * Añadir funciones Persona a la Clase de Persona
// ? Así copiaremos lo que tenemos en el prototype 
// ? de Persona y le agregamos las funciones de Persona.
Object.assign(Persona.prototype, funcionesPersona);

// ! Añadimos las mismas funciones a otra clase
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Luis', 'correo@coreo.com');
console.log(persona);

// ? Al mostrarlo ya veremos en el Prototype la función.
// ? utilizaremosla función que creamos dentro del Objeto
// ? Que le pasamos con prototipe.
persona.mostrarInformación();
persona.mostrarNombre();

// * La ventaja de todo esto es que puedes tener un Objeto
// * con funciones y pasarselas a nuestras Clases.
// * Así que puedes crear una segunda clase y agregar 
// * funcionesPersona, así digamos que podras categoriarlas.

const cliente = new Cliente('Eduardo', 'correoCliente@coreoCliente.com');
console.log(cliente);
cliente.mostrarNombre();
cliente.mostrarInformación();

// ! Se parece a la tecnica de Composition, pero esa es un poco
// ! más compleja que esta.