
// # 155. El problema de no usar Prototypes

// - Es que si  muchas personas están trabajando en el codigo, en muchos de los casos
// -| las funciones pueden ser mal utilizadas, o ser confundidas unas con otras y
// -| estar documentado a cada rato suele ser muy tedioso y dificil de mantener.

// - Lo que soluciona el Prototype, es que le puedes agregar funciones que son exclusivas
// -| de los objetos que creemos, de esa forma solamente expandemos el prototype en la consola
// -| y podremos ver todas las funciones que tenemos disponibles.

// * Object Constructor
// - Es un objeto reutilizable.

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const luis = new Cliente(`Luis`, 500);
console.log(luis);

// * Mira como empezamos a crear funciones especificas para cada objeto.

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La Empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearCliente(luis));

function Empresa( nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
    
}

const systemwoork = new Empresa(`SystemWoork`, 4000, `Programación`);
console.log(formatearEmpresa(systemwoork));