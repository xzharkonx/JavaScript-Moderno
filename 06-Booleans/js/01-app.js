
// # 30. Crear y Comparar Booleans

// * El tipo de dato boolean solo tiene 2 valores, true o false.

const boolean1 = true;
const boolean2 = false;
// !! Colocarlo como String no sirve de nada, solo será String y no se puede comparar.
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

// * En este caso podemos ver que tenemos false
console.log(boolean1 == boolean3);

// * Existe otra forma de crear booleans
const boolean4 = new Boolean(true);
console.log(boolean4);

// ! Pero será un objeto como tal
console.log(typeof boolean4);