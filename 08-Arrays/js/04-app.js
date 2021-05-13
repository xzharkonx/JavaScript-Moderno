
// # 49. Agregar nuevos valores a un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// ! Modificando un elemento del arreglo, apesar de que es const, 
// ! sus valores si se pueden modificar.
meses[0] = 'Nuevo Mes';
meses[7] = 'Último Mes';

// ? Si colocaramos un indice fuera de la serie no pasaría nada, 
// ? solo lo agrega en la posición indicada,
// ? sin colocar indices vacios anteriores. Serán undefined.
meses[10] = 'Último Último Mes';

console.table(meses);