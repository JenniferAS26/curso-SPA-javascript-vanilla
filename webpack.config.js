const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* generamos un modulo y lo exportamos
    este modulo es un objeto donde vive toda la configuracion
    - El primer elemento es tener nuestro punto de entrada "entry" -> desde aqu va a partir el desarrollo que vamos a crear
    - Debemos poner un "output" -> Es donde vamos a poner este proyecto ya estructurado y compilado listo para produccion
        - __dirname -> Donde se encuentre la carpeta ahi vas a poner una nueva carpeta, para este caso "dist" distribution
    - Debemos trabajar sobre las extensiones que va a utilizar nuestro proyecto "resolve"
        - Crear un arreglo con las extensiones con las que voy a trabajar
    - modules -> Vamos a crear el modulo con las reglas que vamos a usar, en este caso BABEL 
        - rules -> generamos la estructura de babel, 
            - test -> para identificar estos archivos segun los que se encuentran en nustro entorno por medio de expresiones regulares
            - expluimos la carpeta de node-modules
            - vamos a usar un loader 
    - plugins -> en este caso HtmlWebpackPlugin nos va a permitir trabajar con los archivos HTML
        - new HtmlWebpackPlugin(pasandole un arreglo y luego un objeto con la configuracion que voy a usar)
            - inject -> como voy a un archivo HTML inyectar un valor
            - template -> donde se encuentra el emplate principal
            - filename -> podemos ponerle un nombre a eleccion
*/ 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        )
    ]
}