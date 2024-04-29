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

## Importar bootstrap en el style.scss
@import 'bootstrap/scss/bootstrap';

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
## Utilizar esta ruta para mejor funcionamiento en el style.scss
@import '../node_modules/bootstrap/scss/bootstrap';
