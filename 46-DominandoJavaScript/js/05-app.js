
// # 291. Explicit Binding

// ? En el tema de Objetos vimos la palabra reservada this
// ! Existen diferentes tipos de this
// ? Se les conoce como Binding

// - Implicit Binding
// - Explicit Binding
// - new Binding

// * Explicit Binding
// ? Se da por explicito (indicación) encontrar el valor.
// ! Se utilizan 3 funciones.
// - call()
// - apply()
// - bind()

function persona(e1,e2) {
    console.log(`mi nombre es ${this.nombre} y escucho ${e1} y ${e2}`);
}

const informacion = {
    nombre: 'Luis',
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// Aqui tenemos un Objeto y un Arreglo
// en la función persona, tenemos un elemento del objeto
// y 2 más del Arreglo.

// Se ve extraño pero para eso es muy útil el 
// Explicit Binding, porque no siempre vas a tener
// los datos dentro del mismo Objeto y no vas a poderle
// poner this.atributo, si no que vas a tenerlo de 
// manera explicita.

// * call()
// Para ello se utiliza una función llamada call()
// call() existe en todas las funciones de de JS
// incluso en la que tu creas.
// Puedes pasarle digamos un objeto  o un arreglo
// dentro de esa función.

// ? Mira que a la función le pasamos el objeto.
// ? Para pasarle un array debemos de hacerlo dato por dato.
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// - Esta al llamarla así ya se hará ejecutado.

// * apply()
// ? Existe otra forma de hacerlo con apply()
// ! La diferiencia de que apply si toma un arreglo.
persona.apply(informacion, musicaFavorita);

// * bind()
// ? Es muy similar a call(), tienes que pasarle los
// ? elementos de forma individual.
// ! La diferiencia es que te crea/retorna una nueva función.
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn(); // ! Ejecutamos la función.