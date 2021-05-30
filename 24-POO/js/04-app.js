// # 167. Propiedades Privadas en JavaScript

// * Class Declaration
class Cliente {

    // ? Hoy en día podemos agregarle a la propiedad un signo de # seguido del
    // ? nombre de la propiedad: #propiedad

    #nombre;

    // * Así solamente podremos acceder a ella desde sus métodos internos de set y get.
    // - Desde algún constructor.
    // - Desde algún otro método.

    constructor(nombre,saldo){
        // ? Se declará nombre con un # para hacerlo un campo privado
        this.#nombre = nombre;
        this.saldo = saldo; // Atributo común.
    }

    // * Método de instancia
    // - Está aparecerá en el Prototipe.
    mostrarInformacion(){
        
        // ? Para saber el nombre de la Clase.
        // console.log(this.constructor.name)

        // ? Recuerda que al llarmar al atributo también le colocaremos una #.
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`
            
    }

    // - Propiedades estáticas / Método estático
    // ! Está NO aparecerá en el Prototipe
    static bienvenida(){
        return `Bienvenido al cajero`
    }

    // - set
    setNombre(nombre){
        this.#nombre = nombre;
    }
    
    // - get
    getNombre(){
        return this.#nombre;
    }
}

const luis = new Cliente('Luis', 5000);

// * Propiedad pública
// !! Ahora como el dato es privado no podremos acceder a el de está forma.
// console.log(luis.nombre);

// - Podremos mostrar el nombre accediendo dentro de el desde un método.
console.log(luis.mostrarInformacion());
console.log(luis.getNombre());
luis.setNombre('Luis Eduardo');
console.log(luis.getNombre());