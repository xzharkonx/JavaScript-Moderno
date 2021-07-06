
// # 308. Factory.
// - Factory: Crea objetos basados en ciertas condiciones.

class InputHTML {
    constructor(type, nombre){
        this.type = type;
        this.nombre = nombre;
    }

    // * Basado en los datos que le pasemos, este creará diferentes inputs.
    creatInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}>`;
    }

    // * Aquí podemos ir agregando diferentes funcionalidades
}

class HTMLFactory{
    crearElemento(tipo,nombre){

        // * Aquí es a donde vamos a evaluar
        // ? Factory tiene una característica
        // ? que crea los objetos basados en 
        // ? cierta condición.

        // ? Como vamos a utiliar este HTML Factory
        // ? para que cree las instancias de inputHTML
        // ? y nos traiga este.

        switch(tipo) {
            
            case 'text':
                
                // * Le retornamos la instancia del Objeto
                // ? Es como si le pasaramos un Objeto con
                // ? esos valores.
                
                return new InputHTML(tipo, nombre);
                // return new InputHTML('text',  nombre)
            case 'tel':
                return new InputHTML(tipo, nombre);
                // return new InputHTML('tel',  nombre)
            case 'email':
                return new InputHTML(tipo, nombre);
                // return new InputHTML('email',  nombre)

            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.creatInput());

// ! Todo esto solamente para crear un input de tipo Text. 

const elemento2 = new HTMLFactory();
const inputTel = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputTel.creatInput());

// ? Pero mira que habremos creado rápidamente otro elemento basado
// ? en ciertas condiciones en este caso de tipo telefono.

// ! Recuerda
// ? Cada vez que agreguemos un caso basado en ciertas condiciones
// ? tenemos que agregarlo en la fabrica.

// ! Si creamos nuevos comportamientos
// ? Esos se agreegaran como metodos en el Objeto.

const elemento3 = new HTMLFactory();
const inputEmail = elemento3.crearElemento('email', 'email-cliente');
console.log(inputEmail.creatInput());