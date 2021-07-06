
// ? Variable donde guardaremos nuestra instancia
let instancia = null;
class Persona {


    constructor(nombre,edad){

        if(!instancia) {
            this.nombre = nombre;
            this.edad = edad;
            // ! Le decimos que nuestra instancia será esta misma.
            instancia = this;
        } else {
            return instancia;
        }

    }
}

const p1 = new Persona('Luis', 28);
const p2 = new Persona('Leiya', 25);
console.log(p1);
console.log(p2);