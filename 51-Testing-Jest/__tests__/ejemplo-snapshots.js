
// # 327. Introducción a Snapshots.

const cliente = {
    nombre: 'Luis Eduardo',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing', () => {

    test('Es Luis Eduardo', () => {
        expect(cliente.nombre).toBe('Luis Eduardo');
        
        // const c = JSON.stringify(cliente);
        // console.log(typeof c);
        // console.log(c);

    });
    
    // ! Ahora, como podríamos probar el objeto completo,
    // ! en vez de hacerlo propiedad por propiedad.
    
    // ? Una forma sería convertir todo este objeto a un String
    // ? con un JSON.stringify() y desde ahí comparar ese Objeto
    // ? con la cadena de texto que nos retorne JSON.stringify()
    
    test('Test a Objeto Cliente', () => {
        
        const c = JSON.stringify(cliente);
        // ! Si cambias algo de este objeto la prueba fallará porque
        // ! ya no será igual al Objeto.
        const clienteString = JSON.stringify({
                                    nombre: 'Luis Eduardo',
                                    balance: 500,
                                    tipo: 'Premium'
                                });
    
        expect(c).toBe(clienteString);
    });

    // * Pero Jest nos ofrece algo llamado los Snapshots    
    // ? Los Snapshots son datos que se almacenan en un String.
    // ? Se almacenan en una carpeta, digamos a parte.
    // ? Sobre de ella podemos comparar si es el mismo dato.

    test('Testing al cliente mediante Snapshot', () => {
        
        // ? Hacemos un expect al objeto completo
        // ? Utilizaremos el método toMatchSnapshot()
        expect(cliente).toMatchSnapshot();

        // ! La primera vez que se ejecute la prueba con esta
        // ! funcionalidad, nos creará una carpeta nueva 
        // ! llamada __snapshots__, la cuál tendrá un String con
        // ! la forma del Objeto.
        // ? Estos archivos se administran por parte de Jest.
        // ? Solamente Jest debe modificarlos.

        // * Ahora que se hizo el snapshot, si cambiamos nuevamente
        // * nuestro Objeto Cliente, no pasará la prueba.

        // ! Si de verdad queremos probar con otro objeto desde 0
        // ! entonces tendríamos que:
        // - Editar el archivo de __snapshots__
        // - Eliminar el archivo de __snapshots__
        // - Actualizar el __snapshots__ utilizando el siguiente comando:
        // -- Comando: npm t -- -u
        // ? Así actualizaremos el snapshot con el que tengamos en esta prueba.
        // * Reescribira el anterior, lo va a actualizar.

        // ! Esto es por si la versión anterior de ese objeto ya no nos sirve con eso
        // ! podremos actualizarlo.

    });
    
});