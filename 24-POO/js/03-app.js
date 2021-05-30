// # 166. Heredar una Clase

// * Class Declaration
class Cliente {

    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // - Método de instancia.
    // -- Está aparecerá en el Prototype.
    mostrarInformacion(){
        
        // ? Para saber el nombre de la Clase.
        // console.log(this.constructor.name)

        if(this.constructor.name === 'Cliente'){

            return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
        }else{
            
            return `Empresa: ${this.nombre}, tu saldo es de ${this.saldo}`
        }
    }

    // - Propiedades estáticas / Método estático
    // !! Está NO aparecerá en el Prototipe
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

// ## Herencia
// - Agregamos la palabra reservada extends.
class Empresa extends Cliente {

    constructor(nombre, saldo, telefono, categoria) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
        
        // - Con super acarreamos los datos heredados de Cliente.
        // - Agregamos 2 atributos más. 
    }

    // - Propiedades estáticas / Método estático
    // !! Está NO aparecerá en el Prototipe
    // ! Sobreescribe el método de herencia si es igual.
    
    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }

    // ? Si existe algún otro método igual lo sobreescribirá de la clase a 
    // ? quien se este creando el objeto.
}

// - Clase simple.
const luis = new Cliente('Luis', 5000);
console.log(luis.mostrarInformacion());

// - Clase de Herencia.
const empresa = new Empresa('systemwoork', 50, 7122302540, ' Aprendiaje en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

// - Método estático.
// -- Se ejecuta por medio de la Clase.
console.log(Empresa.bienvenida());