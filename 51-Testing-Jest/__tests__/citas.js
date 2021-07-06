
// # 329. Testing al Proyecto de Citas - Agregar Cita.

// ? Recuerda que ya tenemos Babel agregado a nuestro proyecto.
// ? Por lo que podemos importar normalmente.

// * Vamos a probrar la clase de citas.
// ! No requieres ponerle la extensión .js del archivo Citas.js

// * Para actualizar los snashopts aquí será últil el comando de: 
// -: npm t -- -u 

import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {


    // * Creamos una instancia para probar la clase Citas
    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {

        // ? Cuando creamos nuevas citas le teniamos que pasar cierta info,
        // ? Teniamos una variable citaObj.
        
        // ? Probaremos la funcionalidad de la clase, es decir,
        // ? que este bien hecho el código que estamos haciendo por lo tanto
        // ? no vamos a validar si esta vacio o no nuestro objeto.
        // ! Lo editaremos para validarlo con nuestrar propiedades
        const citaObj = {
            id,
            mascota: 'Evil',
            propietario: 'Luis Eduardo',
            telefono: '7122001122',
            fecha: '16-06-2021',
            hora:'07:15',
            sintomas: 'Solo duerme'
        };       

        citas.agregarCita(citaObj);

        // ! Prueba 
        // ? Esto nos creará un snapshot con esa información.
        expect(citas).toMatchSnapshot();

        // ! Podemos revisar el snapshot para ver que efectivamente se está 
        // ! pasando la información

        // * Vamos a poder verificar que la información que le estemos pasando
        // * a la Clase se este guardando correctamente.
        // * La parte de agregarCita esta funcionando correctamente.

    });


    test('Actualizar cita', () => {

        const citaActualizada = {
            id,
            mascota: 'Sinfon',
            propietario: 'Luis Eduardo',
            telefono: '7122001122',
            fecha: '16-06-2021',
            hora:'07:15',
            sintomas: 'Solo duerme'
        };

        // Le pasamos el objeto de la cita actualizada
        citas.editarCita(citaActualizada);

        // Escribimos el snapshot para poderlo comparar
        expect(citas).toMatchSnapshot();

    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);
        // Entonces el valor que esperamos es el de citas
        // Y que nos haga un snapshot
        expect(citas).toMatchSnapshot();
    });
});