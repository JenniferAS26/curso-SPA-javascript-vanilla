# curso-SPA-javascript-vanilla

# Algunas definiciones 
- Single Page Application (SPA): Son aplicaciones construidas con JS que nos permiten cargar todo el contenido de nuestra aplicacion una sola vez. Esto significa que nosotros vamos a mandar todo nuestro HTML, CSS y JavaScript una sola vez al navegador y ahi es donde va a vivir toda nuestra aplicacion, no vamos a necesitar recargar la aplicacion y si vamos a necesitar que navegar entre secciones son seciones entre las cuales vamos a navegar y "__no paginas__" 

- Son faciles de debuggear, son aplicacions mas pequenas y entendemos como esta constituido todo nuestro codigo

- Son faciles de crear porque tienen la estructura necesaria que vamos a requerir, al ser cargadas una sola vez vamos a poder utilizar todo el contenido que necesite en esa sola carga y en dado caso de ser necesario hacer llamados a una API lo vamos a poder hacer segun la accion del usuario y este contenido va a ser renderizado en nuestra aplicacion

    # DESVENTAJAS
    - No es tan compatible con el SEO, nuestra aplicacion al solo tener un archivo HTML solo va a tener una sola cabecera y no va a ser dinamico como lo hariamos con otras implementaciones.
    - No pueden ser construidas para ser escaladas 

# Configuraciuon del entorno de trabajo
- 1. git init 
- 2. npm init 
- 3. Crear una carpeta "src" aqui es donde va a vivir todo nuestro codigo
    - Crear carpeta de paginas "pages"
    - Crear carpeta de rutas "routes"
    - Crear carpeta de estilos "styles"
    - Crear carpeta de utilerias "utils"
    - Crear un archivo principal index.js
- 4. en la raiz crear una nueva carpeta de nombre "public" donde va a vivir el codigo que vamos a utilizar
    - Crear archivo index.html
- 5. # Preparar Webpack 
    - instalacion de las dependencias en la terminal
        - npm install @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev
- 6. # Agregar la configuracion del poyecto
    - Aqui vamos a construir toda la configuracion que requiere nuestro proyecto
    - Crear en la raiz un archivo para las configuraciones de nombre webpack.config.js
        - Revisar el archivo para explicacion de cada seccion

# Proyecto
- 1. Dentro de la carpeta "pages" creamos un archivo de nombre Home.js
- 2. 


# NOTAS
- @babel/core -> incluye toda la libreria de babel
- webpack-cli -> nos permite manejar ciertos comandos que vamos a utilizar
- webpack-dev-server -> entorno de desarrollo local para probar los cambios que estamos haciendo
- # package.json
    - scripts -> nos permite establecer comandos que amos a ejecutar en la terminal
        "build": "webpack --mode production",
        "start": "webpack-dev-server --open --mode development" 
                habilitar un servidor abre un navegador y le pasamos un modo
    

