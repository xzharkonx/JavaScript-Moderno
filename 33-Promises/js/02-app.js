
// # 219. El muy exagerado Callback Hell

const paises = [];

function nuevoPais(pais, callback) {
    
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();

}


function mostrarPaises() {
    console.log(paises);
}

// * Callbackhell

// ? Se le llama así porque cada vez que vayamos
// ? agregando más elementos vamos teniento esta forma
// ? como de curva hacia adentro.

// ! Cuando son pocas funciones esta bien, pero cuando
// ! son muchas no se recomienda tanto.

// ? Por ello los promises dan una sintaxis más clara.
function iniciarCallbackHell() {

    setTimeout(() => {
        nuevoPais("Alemania", mostrarPaises)
        
        setTimeout(() => {
            
            nuevoPais("Francia", mostrarPaises)

            setTimeout(() => {
            
                nuevoPais("Inglaterra", mostrarPaises)
                
            }, 3000);
            
        }, 3000);

    }, 3000);
}

iniciarCallbackHell();