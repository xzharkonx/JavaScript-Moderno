
// # 187. Qué es un Weakset y en que se diferencia de un Set

// * Weakset
// ? - Solo se le pueden pasar o agregar Objetos
// ? - No son iterables
// ? - No se les puede conocer la longitud con .size

const weakset = new WeakSet();

const cliente = {
    nombre: 'Luis',
    saldo: 5000
}

// const nombre = 'Luis';   // !! Esto nos marcará un error. 
                            // !! Porque no son Objetos
// weakset.add(nombre);     // !! Esto nos marcará un error. 
                            // !! Porque no son Objetos

// * Agregar Objetos al WeakSet.

weakset.add(cliente);
console.log(weakset);

// * Eliminar un Objeto del Set con .delete
// carrito.delete(cliente); // Se puede eliminar así, o:
// ? Si lo elimina dará true si no dará false.
console.log(weakset.delete(cliente));


// !! Saber la longitud del Set con: .size, Pero no sirve.
// console.log(weakset.size);

// * Comprobar si tiene un valor con .has()
// ? Si lo encuentra dará true si no dará false.
console.log(weakset.has(cliente2)); // false
