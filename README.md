Clase 1: Introducción a React, Inicialización y Estructura Básica
1. Inicialización del proyecto

Se utilizó Next.js para crear el proyecto, lo que permite desarrollar aplicaciones React con funcionalidades avanzadas como enrutamiento automático y renderizado del lado del servidor.
Se generó la estructura base del proyecto, incluyendo carpetas como src, public, y archivos de configuración como package.json, tsconfig.json, entre otros.
2. Archivo layout.tsx

Este archivo define el layout global de la aplicación.
Se importan fuentes personalizadas y estilos globales.
El componente RootLayout envuelve toda la aplicación y asegura que los estilos y fuentes se apliquen en todas las páginas.
Uso: Permite mantener una estructura y diseño consistente en toda la app, como cabeceras, pies de página o estilos generales.
3. Archivo src/app/page.jsx (o page.tsx)

Es la página principal que se muestra al iniciar la aplicación.
Aquí se pueden mostrar componentes principales, mensajes de bienvenida o menús.
Uso: Sirve como punto de entrada visual para el usuario, donde se pueden integrar otros componentes y funcionalidades.
4. Carpeta Components

Se creó para organizar componentes reutilizables.

Archivo Boton.jsx

Define un componente de botón personalizado.
Recibe props como texto y onClick para mostrar diferentes textos y ejecutar funciones al hacer clic.
Incluye estilos avanzados para mejorar la apariencia y experiencia de usuario.
Uso: Permite reutilizar el mismo botón en diferentes partes de la app, manteniendo la lógica y el diseño centralizados.
Archivo first.jsx

Componente simple que muestra un saludo y un número.
Uso: Ejemplo básico de cómo crear y exportar componentes en React.
Clase 2: Carpeta Pages y Componentes con Estado/Efectos
1. Carpeta pages

Se creó para agregar vistas adicionales y practicar el enrutamiento en Next.js.

Archivo vistaEffect.jsx

Componente que utiliza el hook useEffect de React.
Permite ejecutar código cada vez que cambia el estado nombre (por ejemplo, mostrar un mensaje en consola).
Incluye un input para que el usuario escriba su nombre, y muestra un saludo dinámico.
Uso: Demuestra cómo reaccionar a cambios de estado y realizar efectos secundarios, como logs o peticiones a APIs.
Archivo vistanueva.jsx

Componente que implementa un contador usando el hook useState.
Permite aumentar o disminuir el valor con botones.
Uso: Ejemplo práctico de manejo de estado en React, mostrando cómo actualizar la interfaz en respuesta a acciones del usuario.
Resumen de Usos y Conceptos
Next.js: Framework que facilita la creación de aplicaciones React escalables y optimizadas.
Componentes: Bloques reutilizables que permiten dividir la interfaz en partes independientes y manejables.
Hooks (useState, useEffect): Funciones especiales de React para manejar estado y efectos secundarios en componentes funcionales.
Layout Global: Permite definir estilos y estructuras que se aplican en toda la aplicación.
Enrutamiento: Next.js crea rutas automáticamente según la estructura de carpetas y archivos en pages y app.
Esta estructura y los ejemplos desarrollados te permiten entender cómo organizar un proyecto React moderno, cómo reutilizar componentes y cómo manejar la lógica de estado y efectos en tus aplicaciones.