# MultiProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Instalar bootstrap para modificarlo con SASS(scss)
npm install --save bootstrap

## Utilizar esta ruta en el style.scss
@import '../node_modules/bootstrap/scss/bootstrap';
## Esto importa todo lo que necesitamos, variables,mixins, etc...

## Instalar dependencias popper.js
install bootstrap popper.js

## Definir ruta del script en el angular.json
"scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]

## Instalar dependencias de SASS(scss)
npm install -g sass

## Watch mode para observar los cambios y compilarlos
sass --watch ./styles.scss ./styles.css
## O utilizar extensión Live Sass Compiler

## Para la visualización del mapa utilizaré leaflet
## Debemos instalarlo usando npm
npm install leaflet

## Posteriormente lo personalizaré con scss, usando el archivo scss del componente weather/map
map.component.scss

## En este archivo debemos importar la hoja de estilos de leaflet
@import '~leaflet/dist/leaflet.css'

## No hay que olvidar que para un funcionamiento correcto de la hoja de estilos hay que modificar el angular.json
"styles": [
              "src/styles.scss",
              "src/weather/components/map/map.component.scss"
            ],

## Además de los scripts, como hice anteriormente con bootstrap
"scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "./node_modules/leaflet/dist/leaflet.js"
            ]

## Instalar los tipos de leaflet
npm install --save-dev @types/leaflet

## Utilizar archivo de AEMET para el mapa de leaflet
src/assets/leafMET.js

## Scafolding personalizado para el proyecto
La organización de carpetas y archivos ha sido estudiada para ofrecer una búsqueda eficiente dentro del proyecto

## Apis, se pueden encontrar en shared/enviroments
Se han utilizado las apis:
-OpenWeatherMap
-Aemet
-RestCountries
-OpenDataSoft
## Para algunas apis es necesario usar una apikey
-Aemet
-OpenWeatherMap

## login y register
Los usuarios logueados se guardan en sessionStorage
Los usuarios registrados se guardan en localStorage

## Navegador 
Al ejecutar ng serve ó ng serve -o, se abrirá el navegador predeterminado en tu equipo

## Para activar los márgenes negativos de bootstrap modificar la variable a true de _variables.scss 
## $enable-negative-margins: true !default;

## Eliminar dependencias que no se usen


