# Buscador de películas

Este proyecto consiste en una prueba técnica de React, en donde, se debe crear un buscador de películas con los siguientes requisitos:

## Enunciado

Crea una aplicación para películas 

API a usar

- https://www.omdbapi.com/
- (API_KEY gratuita: -----)

### Requerimientos funcionales:
- Búsqueda de películas:
    - Input para ingresar el nombre de la película.
    - Botón para iniciar la búsqueda.

- Visualización de resultados:
    - Mostrar un listado con el título, año y póster de cada película.
    - Diseñar un grid responsive para organizar los resultados.

- Optimización de la búsqueda:
   - Evitar búsquedas duplicadas consecutivas.
   - Implementar una búsqueda automática al escribir.
   - Evitar solicitudes continuas al escribir mediante debounce.


## Funcionalidades adicionales

- Mocks para pruebas: Uso de datos simulados para desarrollo y pruebas.

- Separación de lógica: Organización clara del código para mantener la funcionalidad desacoplada del diseño.

- Componentización modular: Dividir la UI en componentes reutilizables y fáciles de gestionar.

- Custom hooks: Diseño de hooks personalizados para manejar lógica específica: 

    - búsqueda del usuario 
    - validación del input  
    - Control de errores
    - Que no se realice la misma búsqueda repetidamente
    - Loading
    -  Revisión de estado anterior

- Hooks de React: Uso de useRef, useState, useMemo y useCallback para optimizar el rendimiento.

- Fetching de datos: Realización de solicitudes HTTP para obtener información desde la API y separación del servicio.

- Validación de inputs: Control y sanitización de entradas de usuario.

- Grid responsive: Diseño flexible que se adapta a diferentes tamaños de pantalla.

- Ordenamiento de películas: Funcionalidad para clasificar los resultados en orden alfabético.

- Renderización condicional: Muestra elementos según el estado de la aplicación.

- Búsqueda automatica del usuario: A medida que el usuario ingresa texto en el campo de búsqueda, la aplicación realiza solicitudes a la API sin necesidad de presionar un botón.

    - Debounce para optimización: Retrasa las solicitudes a la API mientras el usuario escribe. Esto evita múltiples llamadas innecesarias, mejora la eficiencia de la aplicación y evita race conditions
    - Mantiene las features anteriores como la validación del input, control de errores, etc.
