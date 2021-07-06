
// # 290. Implicit Binding

// ? En el tema de Objetos vimos la palabra reservada this
// ! Existen diferentes tipos de this
// ? Se les conoce como Binding

// - Implicit Binding
// - Explicit Binding
// - new Binding

// * Implicit Binding
// ? Se da por implicito (en automático) encontrar el valor.

const usuario = {
    nombre: "Luis",
    edad: 20,
    informacion() {

        // !! Dará error por no encontrar los valores
        // console.log(`Mi Nombre es ${nombre} y
        // mi Edad es ${edad}`);

        console.log(`Mi Nombre es ${this.nombre} y mi Edad es ${this.edad}`);
    },

    // * Que pasa si agregamos otro Objeto con los 
    // * mismos atributos.
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {

            // ? Este otro this buscará en este mismo
            // ? Objeto y no se mezclara con el otro

            console.log(`Mi Mascota es ${this.nombre} y su Edad es ${this.edad}`);
        }
    }
}

// !! Esto no nos va a leer los valores
// Sin this.
// usuario.informacion(); // !! Error!

// * De esto trata el Implicit Binding
// ? Tenemos que decirle en qué lugar va a encontrar
// ? lo que son estos valores, ya sean nombre y edad.
// ? Por ello se utiliza la palabra reservada this.
// ? En este mismo objeto va a encontrar los valores.

// Con this.
usuario.informacion();
usuario.mascota.informacion();