Este proyecto esta creado con [React](https://github.com/facebook/create-react-app).

# Pasos para iniciar con el proyecto

### Correr `npm i o npm install` (Por las lib usadas)

### `npm start`

## Estructura de carpetas

La estructura de carpetas y archivos a seguir en el proyecto.

- Separación de responsabilidades, Se debe de definir en que carpeta debe de ir cada tipo de archivo dependiendo de su funcionalidad,
- Debe de ser cómoda ( evitar nesting necesario )
- Predecible ( facilidad para encontrar cualquier archivo incluso si lo escribe un co-worker)

Es una estructura con la que he estado bastante cómodamente.

```
├───public
└───src
    ├───api
    ├───assets
    ├───components
    │   ├───elements
    │   ├───layouts
    │   ├───modules
    │   └───templates
    ├───lib
    │   └───slices
    ├───pages
    └───utils
```

- utils: Para agrupar funciones con lógica que se puede rehusar en diferentes partes de la aplicación.
- pages: Cada ruta perteneciente a la aplicación debe de tener referencia a un componente ubicado en el folder pages. Este componente no debe de tener ninguna lógica relacionada con los componentes.
- lib: para agrupar configuraciones o lógica relacionada con alguna libreria externa ( ej: slices de Redux Toolkit)

components:

- elements: Bloques básicos para ser reutilizados a través del app ( botones, inputs, headline, footer, etc)
- modules: Componentes que son mas que un bloque basico, pueden contener mas logica, estado propio, o incluso estar conectado al redux o algun provider
- templates: Es la unión de varios modules y son como el resultado de una vista de la aplicación, las conexiones al redux se pueden realizar aqui sin ningún incoveniente y pueden pasar estos valores como props a los modules.
- layouts: aqui se alojarán los templates que definen la distribución de los elementos en la aplicación, ej: CommonLayout.tsx posee sidebar, header, footer y recibe main content como children, seria el contenido de esa vista.

# Librerías

Las librerías usadas en la aplicación son las siguientes:

### [Redux/toolkit][redux/toolkit]

Redux es una biblioteca y a la vez una serie de patrones que nos permiten gestionar el estado global de nuestra aplicación.
Redux Toolkit nos permite dividir cada funcionalidad en un segmento de características y, a medida que se agregan más y más características, podemos acceder a cada "segmento" de datos.
Toolkit nos brinda las siguientes herramientas que utilizaremos en el proyecto.

- createSlice,
- configureStore
- createReducer
- createAction
- createAsyncThunk

### [Axios][axios]

Cliente HTTP basado en promesas para el navegador y node.js

### [Styled Components][styled-components]

Permite utilizar estilos a nivel de componente en sus aplicaciones. Los componentes con estilo aprovechan una mezcla de JavaScript y CSS mediante una técnica llamada CSS-in-JS

### [Craco][craco]

Es una capa de configuración fácil y comprensible para create-react-app, esta es utilizada en este proyecto para que los alias de los imports sean más legibles y limpios.

### [React Router Dom][react-router-dom]

Es usado para el enrutamiento y/o navegación entre componenentes.

### [React Switch][react-switch]

Componente de switch ui

### [React Icons][react-icons]

Cátalogo de librerias de icons

### [Fontsource][fontsource]

Cátalogo de fuentes

[redux/toolkit]: https://redux-toolkit.js.org/introduction/getting-started "Redux/toolkit"
[axios]: https://axios-http.com "Axios"
[styled-components]: https://styled-components.com/ "Styled Components"
[craco]: https://github.com/gsoft-inc/craco "Craco"
[react-router-dom]: https://reactrouter.com/web/guides/quick-start "React Router Dom"
[react-switch]: https://github.com/markusenglund/react-switch "React Switch"
[react-icons]: https://react-icons.github.io/react-icons/ "React Icons"
[fontsource]: https://fontsource.org/ "Fontsource"


El desarrollo del proyecto empezó:

- Instalación y configuración del mismo (paquetes básicos).
- Creación del layout, header.
- Maquetación del login (desktop & responsive) y de esa manera la creación de los componentes básicos como input, button etc.
- Maquetación de la vista "Arma tu plan" y sus components (desktop & responsive).
- Maquetación de la vista "Gracias" (desktop & responsive).
- Integración de la api https://jsonplaceholder.typicode.com/ para la obtención de la data de la persona.
- Se definió un slice - reducer de auth para la autenticación del usuario, es mismo state es usado en las rutas privadas y publicas-restringidas.
- Lógica en "Arma tu plan" haciendo uso de reducer esto en relacion al contador y agregar o quitar cobertura.

Nota: La api suministrada no da endpoint de logueo, lo que hice fue pasar un id (1-10) seteado para poder filtrar y mostrar la data de un usuario y asi mostrar el nombre en "arma tu plan" y el email en la "pagina de gracias"
