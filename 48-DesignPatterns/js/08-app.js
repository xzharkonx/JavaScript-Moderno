
// # 312. Mediator

// ? Le agregaremos unas propiedades
// ? la de sala va a ser la de subasta y la estaremos agregando
// ? con el mediador por eso solo la definimos.
function Vendedor(nombre){

    this.nombre = nombre;
    this.sala = null;
}

// * Los vendedores tendrán 2 funciones
// - Lanzar una oferta.
// - Definir quién es el vendedor o quién
// -| fue el que compró.
Vendedor.prototype = {

    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo: ${articulo}, `+
        `iniciamos con un precio de: ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a: ${comprador}`);
    }
}

// ? También a este se le define sala = null porque una vez que
// ? se  crea la subasta se va a llenar ese campo en la sala 
// ? del vendedor y del comprador.
// ! Van a estar como en una misma sala.
// ! Solo hasta que la subasta haya sido creada.
function Comprador(nombre){

    this.nombre = nombre;
    this.sala = null;
}

// * Para agregar funciones exclusivas al comprador.
// ? El comprado va a ofertar.
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}


// * Estos dos se van a comunicar por medio de otro Objeto.
// ? Finalmente colocaremos al vendedor y al comprador en la
// ? misma sala.
function Subasta(){

    let compradores = {}

    // ! No olvides que es una función que retornará un Objeto.
    // ? Ya en este objeto podremos ejecutar registrar.
    return {
        registrar: usuario => {

            // * Registramos al usuario.
            // ? Crearemos una propiedad nueva en el objeto 
            // ? anterior de compradores.
            // ? Esa propiedad será un objeto dentro de compradores.        
            compradores[usuario.nombre] = usuario;

            // ! Por ejemplo:
            // compradores = {
            //     'Luis': {}
            // }
            
            // * Lo agregamos a la sala.
            // ? Le asignamos this, porque eso va a tener
            // ? la instancia actual de la subasta.
            usuario.sala = this;
        }
    }
}




// ## Crear Objetos y operaciones.

// - Compradores.
const luis = new Comprador('Luis');
const eduardo = new Comprador('Eduardo');

// - Vendedor.
const vendedor = new Vendedor('Vendedor de Autos');

// * Mediador para comunicar todos los Objetos.
const subasta = new Subasta();

// * En las funciones del vendedor, podemos lanzar una oferta.
// * Dice a quien se le vendio.


// - Registro en la subasta
// ? De esta forma la subasta vendría a ser el mediador.
// ! Es decir, el que comunica, tanto vendedor con compradores.

// -- Regitramos los usuarios.
subasta.registrar(luis);
subasta.registrar(eduardo);

// -- Regitramos al vendedor.
subasta.registrar(vendedor);

// ? Mostrará la insancia de la sala en ese objeto.
console.log(luis.sala);

// - Vendemos
vendedor.oferta('Mustang 66', 300);

// - Compramos.
luis.oferta(350, luis);
eduardo.oferta(450, eduardo);
luis.oferta(500, luis);
eduardo.oferta(700, eduardo);

// - Anunciamos a quien fue vendido.
vendedor.vendido('eduardo')
