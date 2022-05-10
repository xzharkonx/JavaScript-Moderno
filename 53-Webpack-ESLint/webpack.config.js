
// # Configuración de Webpack

// * Importamos la librería de path
// ? Con path vamos a saber en que carpeta nos encontramos
// ? así que no tendremos que colocar toda la ruta y será más sencillo.

const path = require('path');

// - Aquí le indicaremos cuál es el archivo principal de este proyecto.
// - Despues le ponemos la Salida.
// ? Lo que nos va apermitir Webpack es que en lugar de correr la 
// ? configuración desde el archivo package.json que colocamos de babel
// ? lo haga desde aquí.
// - En la salida le indicaremos que nos cree la carpeta public.
// - Le indicamos como se nombrará el archivo así que lo llamamos
// -| bundle.js (que sería como una caja con todo el código).

// * Configuración del loader de Babel en Webpack

// - Añadiremos el objeto de module y dentro de este un arreglo para los
// -| diferentes tipos de loaders. Cada uno se configura en un Objeto.

// - Si queremos añadir un loader tendremos que agregar un Objeto.
// -- Dentro le agregaremos un test que lo que quiere decir es que como
// --| todo nuestro proyecto tiene diferentes archivos con test nos
// --| nos permitira identificarlos.
// --- Para identificar los archivos lo haremos con una expresión regular
// ---| para buscar todos los archivos de JavaScript con extensión .js
// ---| en toda la carpeta del directorio de nestro proyecto.
// -- También le colocaremos un exlude para ignorar los archivos de 
// --| node_modules que son archivos que no son de nuestro proyecto.
// --- Si hay otros archivos que queramos ignorar, los podemos colocar ahí.

// - Ahora le diremos que loader queremos utilizar con use.
// -- Cada configuración de cada loader la encontraremos más a detalle en
// --| su documentación de Webpack porque cada uno va a ser diferente.
// --- Documentación del Loader de Babel: https://webpack.js.org/loaders/babel-loader/

// * Configuración del Server de webpack

// - Añadiremos una configuración en "devServer" y agregaremos "contentBase" que indicara
// -| en que carpeta encontrará el contenido y le indicaremos la principal con "path",
// -| luego le diremos que será comprimido y le pondremos un puerto.

// - Añadiremos una configuración adicional en "publicPath" para lo que vamos a estar
// -| compilando va a estar en "la carpeta public" y despues en "javascript".

// - Añadiremos un "watchContentBase" para estar revisando por cambios y lo activamos con "true".

// * Configuración del loader de ESLint en Webpack

// - Añadiremos el objeto de module y dentro de este un arreglo para los
// -| diferentes tipos de loaders. Cada uno se configura en un Objeto.

// - Si queremos añadir un loader tendremos que agregar un Objeto.
// -- Dentro le agregaremos un enforce y le pondremos de valor 'pre', es decir,
// --| antes de todo lo que tenga que hacer Webpack lo revise (antes de que haga algo).
// --- Existe otro valor que se llama 'pos', es decir, una vez que termino.
// -- Añadiremos la demás configuración necesaria del loader.

// - Añadiremos un Objeto llamado Options al cual le agregaremos un atributo llamado
// -| fix y el valor de true para hacer que se solucionen unos problemas automáticamente.


module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'

    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        publicPath: "/public/js/",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    }
}