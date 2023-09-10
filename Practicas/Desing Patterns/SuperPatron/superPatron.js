
// # Super patrón
// + Patron creacional
// ! Prueba con una Función y Un Objeto que tiene una función y que retorna un Objeto y así ciclicamente.

console.log(invocar().guerrero().stats().tipo); // guerrero
console.log(invocar().mounstruo().stats().tipo); // mounstruo


function invocar(){
    return {
        guerrero(){
            return {
                stats() {
                    return {
                        tipo: "guerrero",
                        lvl: 1,
                        ataque: 20,
                        defenza: 10,
                        poderMagico: 10,
                    }
                },

                info(){
                   return {
                        sexo: "Masculino",
                        carisma: 20,
                   }

                }
            }
        },

        mounstruo(){
            return {
                stats() {
                    return {
                        tipo: "mounstruo",
                        lvl: 1,
                        ataque: 50,
                        defenza: 30,
                    }
                }
            }
        },

        mago(){
            return {
                stats() {
                    return {
                        tipo: "guerrero",
                        lvl: 1,
                        ataque: 10,
                        defenza: 10,
                        poderMagico: 30,
                    }
                },

                info(){
                   return {
                        sexo: "Masculino",
                        carisma: 5,
                   }

                }
            }
        },

    }
}

// Otro ejemplo


console.log(calcular().suma(100, 50)); // 150
console.log(calcular().resta(100, 50)); // 50

function calcular() {
    return {

        suma(a, b) {
            return a + b;
            
        },
        
        resta(a, b){
            return a - b;

        }
    }
}



let db = (() => {

    let personas = [];

    return {

            agregar: function(persona){
                personas = [...personas, persona];
            },
            
            mostrar: (() => {

                return {
                    
                    nombrePersona: id => console.log(personas[id].nombre),
                    statusPersona: id => console.log(personas[id].status),
                }
            })(),


            mostrarPersonas: function(){
                personas.forEach(persona => console.log(persona));
            },
            editar:  function(persona){
                console.log('Editando:',persona);
            },
            eliminar: function(persona){
                console.log('Eliminando:',persona);
            }
            
         }

    })();

class Personas {
    
    constructor(nombre, edad, status){
        this.nombre = nombre;
        this.edad = edad;
        this.status = status;
    }
}

db.agregar(new Personas("Luis", 28, 'basic'));
db.mostrarPersonas();
db.mostrar.nombrePersona(0);
db.mostrar.statusPersona(0);

// * Auto ejecución de funciónes
// ? En automático se ejecuta: (fn)(); // Como si fuera un callback.
(()=>console.log("Nueva Función Auto Llamada"))();

(()=>{
    console.log('Auto TODO Here: ...');
})();

// ? O bien on First-Class Function.
const newFuncion = () => "Nueva Función de FirstClass function";
console.log(newFuncion());

const otherFunction = newFuncion;
console.log(otherFunction(), "En otra variable");


// ! Pero esta ya es auto ejecutable, es decir, que ya se ejecuto y nos retorno el contenido.
const newFuncionAuto = (()=> "Nueva Función de Instancia Auto Llamada" )();
console.log(newFuncionAuto);


// ### Prueba 1 de funciones

const juego = (()=>{
    console.log("hola");
    nombreJuego = "Mi juego";
    empezarJuego = () => {
        console.log("Empezando juego");
    }
    empezarJuegoAuto = (() => {
        console.log("Empezando juego");
    })()
})();

juego
// Esta se ejecuta al final porque primero ejecuta todo lo del juego.
console.log(nombreJuego);
empezarJuego();
empezarJuegoAuto