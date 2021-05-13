
// # 65. Arrow Functions

const aprendiendo = function(){
    console.log(`Aprendiendo JavaScript`)
}

const aprendiendo2 = () => {
    console.log(`Aprendiendo JavaScript`)
}

const aprendiendo3 = () => console.log(`Aprendiendo JavaScript`);

// * El retorno de valores es sin return
const aprendiendo4 = () => `Aprendiendo JavaScript`;
// const aprendiendo4 = () => 'Aprendiendo JavaScript';

aprendiendo();
aprendiendo2();
aprendiendo3();

console.log(aprendiendo4());

// ## Practicas

const operacionSuma = (a,b) => a + b;
const operacionRest = (a,b) => a - b;
const operacionMult = (a,b) => a * b;
const operacionDiv = (a,b) => a / b;

let suma = operacionSuma(70,30);
let resta = operacionRest(70,30);
let multiplicacion = operacionMult(70,30);
let divicion = operacionDiv(70,30);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(divicion);

// ### Área del Triángulo.

let h = 2;
let b = 10;
const areaTriangulo = () => ((b*h)/2) ;
console.log(areaTriangulo());