
// # 66. Las Ventajas de los Arrow Functions

// * Una sola línea
// * Mayor legibilidad
// * Le decimos que hacer y no como hacerlo

const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js');

// const aprendiendo2 = (tecnologia) => 'Aprendiendo JavaScript ${tecnologia}';

// ? Sí es una variable se pueden quitar los parentesis

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));