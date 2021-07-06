
// # 307. Singleton



class Usuario {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

// * Esta instanciación es característico de las clases
const usuario = new Usuario('Luis', 'correo@correo.com');
console.log(usuario);
const usuario2 = new Usuario('Eduado', 'correo@correo.com');
console.log(usuario2);

// ? Singleton no te va a permitir hacer múltiples instancias

// ? Esta es una variable que tendrá la instancia del Objeto
// ? pero de monento estará vacía.
let instancia = null;

class Persona {
    constructor(nombre, email){

        // ! Como prevenimos que se creen múltiples Objetos.
        // ? Si la instancia esta vacia crea el objeto
        // ! Si es null, lo negaremos para que sea true;
        // ? Si es true (es verdad que esta vacio),
        // ? Crea la instancia del objeto.
        if(!instancia){
            
            this.nombre = nombre;
            this.email = email;
            
            // - Llamamos a nuestra variable de instancia
            // - Se le asignará el valor de este mismo objeto
            
            instancia = this;
        } else {

            // - Si ya hay algo, retorma la misma instancia que hay.
            return instancia;
        }
    }

}

const persona = new Persona('Luis Eduardo', 'correo@correo.com'); // * Si.
// * Estos valores si valen porque son de la primera instancia.
console.log(persona); 
const persona2 = new Persona('Pikachu', 'poke@poke.com'); // !! No. 
// !! Estos valores no valen porque son de la segunda instancia.
console.log(persona2);

// ? Aúnque tu crees distintas variables, siempre vas a estar trayendo
// ? el mismo objeto.
