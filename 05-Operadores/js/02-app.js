
// # 28. Comparar 2 Valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// ## Revisar si 2 números son iguales

console.log(numero1 == numero3);
// * Con == Es solo un comparador que solamente se fija en el valor y no en el tipo
console.log(numero1 == numero2);

// ## Comparador estricto
// * Con == Es un comparador que también se fija en el valor y en el tipo
// * por lo que en está comparación nos devolverá false.
console.log(numero1 === numero2);

// ## Para mostrar el tipo que es la variable
console.log(typeof numero1);
console.log(typeof numero2);

// ## Convirtiendo mi variable de tipo String a tipo número para poder hacer la comparación
console.log(numero1 === parseInt(numero2));

// ## Diferente de
// * Diferente de con signo de exclamación ! y junto de = 
// (solo que por el editor de texto lo pone así !=), compara si son diferentes.
const password1 = "admin";
const password2 = "Admin";

// Al indicar que ambos son diferentes dará true. Es decir, si estos dos son diferentes 
// pues es verdadero que son diferentes y entonces pasan.
console.log(password1 != password2); 

// En este caso considerá a numero1 y numero2 como iguales, es decir, no son diferentes 
// por eso da false.
console.log(numero1 != numero2);

// ## Diferente de stricto
// Al igual que ===, tenemos un comparador contrario que evalua si son diferentes los 
// elementos tanto en valor y en tipo con signo de admiración ! y doble igual ==, 
// todo junto sería !==
console.log(numero1 !== numero2); // Ahora si nos dará true.
// Ahora si cambiamos el tipo de numero2 entonces nos dará false por que son del mismo tipo.
console.log(numero1 !== parseInt(numero2)); 

