# Práctica: Gestión de Arrays

En esta práctica vas a trabajar en la gestión de un listado de países y su Producto Interno Bruto (PIB) utilizando **JavaScript**. Para ello, partirás de un proyecto ya creado, el cual contiene el archivo **HTML** y **CSS** necesarios para la interfaz. Este proyecto está disponible en la rama `feature_dev`.

## 1. 🎯 Objetivos de la Práctica

El objetivo principal de esta práctica es que el estudiante se familiarice con el manejo de arrays y la manipulación del DOM mediante JavaScript. A través de la implementación de una aplicación interactiva de gestión de países y su Producto Interno Bruto (PIB), se pretende que el estudiante desarrolle y refuerce las siguientes competencias:

1. **Manipulación de Arrays**: Aprender a manejar las operaciones comunes de un array, como agregar, eliminar, ordenar y filtrar elementos, utilizando los métodos integrados de JavaScript (`push()`, `splice()`, `sort()`, `filter()`, `reduce()`, entre otros).

2. **Interacción con el DOM**: Comprender y aplicar técnicas de manipulación del DOM para actualizar dinámicamente el contenido de una tabla HTML en función de las acciones del usuario.

3. **Uso de funciones de orden superior**: Utilizar funciones de orden superior (como `map()`, `reduce()`, y `filter()`) para realizar operaciones más avanzadas sobre arrays, aplicando conceptos clave de la programación funcional.

Esta práctica está diseñada para proporcionar una base sólida en la manipulación de datos dinámicos y en la interacción con interfaces web mediante JavaScript.

## 📄 Instrucciones

### Paso 1: Clonar el repositorio y cambiar de rama

1. Clona el repositorio en tu PC.

2. Crea una rama del proyecto a partir de la rama feature_skeleton.

### Paso 2: Implementar el JavaScript

A continuación, deberás implementar las funcionalidades requeridas utilizando JavaScript:

1. **Array inicial** : El proyecto cuenta con un archivo `script.js` donde debes definir un array de países con su PIB correspondiente. A modo de ejemplo:
   ```javascript
   let paisesPIB = [
       { nombre: "Alemania", pib: 3860 },
       { nombre: "Japón", pib: 4870 },
       { nombre: "Brasil", pib: 2050 },
       { nombre: "Canadá", pib: 1800 },
       { nombre: "México", pib: 1220 },
       { nombre: "China", pib: 14140 },
       { nombre: "India", pib: 2870 },
       { nombre: "Francia", pib: 2770 },
       { nombre: "Reino Unido", pib: 2820 },
       { nombre: "Estados Unidos", pib: 21440 }
   ];

2. **Array inicial** : Agregar Países y PIB: Implementa la lógica para que, al hacer clic en el botón "Agregar País", se seleccione un país de manera aleatoria del array paisesPIB, se añada a la tabla en la interfaz y se elimine del array para evitar que se vuelva a seleccionar. El país seleccionado no podrá ser elegido nuevamente.
3. **Dividir PIB por 2** : Implementa la funcionalidad para que, al pulsar un botón, el PIB de todos los países que se han añadido a la tabla se divida por la mitad. El DOM debe actualizarse correctamente para reflejar el cambio en tiempo real.
4. **Ordenar países** : 
    + Implementa un botón para ordenar los países por PIB de forma descendente (de mayor a menor PIB).

    + Crea otro botón que permita ordenar los países por nombre en orden descendente (de la Z a la A).

5. **Filtrar por PIB mínimo** :
Al pulsar el botón "Filtrar", solo deben mostrarse en la tabla aquellos países cuyo PIB sea mayor o igual a 1500.

6. **Sumatorio del PIB** : Añade un botón que calcule y muestre el PIB total de los países añadidos a la tabla. El resultado debe mostrarse en la interfaz.



