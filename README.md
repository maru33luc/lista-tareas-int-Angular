# Ejercicio: Crear una lista de tareas interactiva

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Objetivo

Aplicar el uso de directivas, property binding y event binding para construir una lista de tareas donde los usuarios puedan agregar, eliminar y marcar tareas como completadas.

## Instrucciones

### Interfaz de usuario

- Crea un componente llamado `task-list` que contenga:
  - Un campo de texto (`input`) para ingresar una nueva tarea.
  - Un botón para agregar la tarea a la lista.
  - Una lista (`ul`) que muestre las tareas agregadas, con la opción de marcarlas como completadas o eliminarlas.

### Directivas

- Utiliza `@for` para iterar sobre el arreglo de tareas y mostrar cada una en la lista.

### Property binding

- Usa property binding para cambiar dinámicamente la clase CSS de las tareas cuando se marquen como completadas (por ejemplo, agregar una clase que las tache).
- Hacer que el botón de "Agregar" esté deshabilitado si el campo de texto está vacío.

### Event binding

- Al hacer clic en el botón "Agregar", la tarea ingresada debe añadirse a la lista.
- Al hacer clic en cada tarea, debe marcarse o desmarcarse como completada.
- Implementa un botón para eliminar tareas específicas.

## Detalles técnicos

### HTML

- Un campo de texto con event binding para capturar el valor ingresado.
- Un botón con event binding para agregar la tarea.
- Un `ul` que itere sobre las tareas usando `@for`.
- Cada tarea debe tener un botón para eliminarla y un evento `click` para marcarla como completada.

### CSS

- Aplica una clase `.completed` que tache la tarea completada (usa property binding para aplicarla dinámicamente).

### PRESENTATIONAL-CONTAINER- PATTERN (AÑADIDO)

- Componente que renderice cada item que devuelve un componente hijo que se encarga de la logica de traer los datos

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
