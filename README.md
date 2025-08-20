# Proyecto Next.js - mi-app

Este proyecto fue creado utilizando [Next.js](https://nextjs.org) y el comando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pasos para crear el proyecto

1. **Instalación de Node.js**  
   Asegúrate de tener instalado [Node.js](https://nodejs.org/).

2. **Crear el proyecto con create-next-app**  
   Ejecuta el siguiente comando en la terminal:
   ```bash
   npx create-next-app@latest mi-app --typescript
   ```
   Esto genera la estructura básica del proyecto en la carpeta `mi-app`.

3. **Instalación de dependencias adicionales**  
   Se instalaron las siguientes dependencias y herramientas:
   - Tailwind CSS y PostCSS para estilos:
     ```bash
     npm install tailwindcss@latest @tailwindcss/postcss@latest postcss@latest
     ```
   - ESLint para linting:
     ```bash
     npm install eslint@latest eslint-config-next@latest @eslint/eslintrc@latest
     ```

4. **Configuración de Tailwind CSS**  
   Se creó el archivo `postcss.config.mjs`:
   ```js
   const config = {
     plugins: ["@tailwindcss/postcss"],
   };
   export default config;
   ```
   Y se configuró Tailwind en los archivos de estilos globales.

5. **Estructura de carpetas**  
   El proyecto tiene la siguiente estructura principal:
   ```
   .
   ├── src/
   │   ├── app/
   │   │   ├── layout.tsx
   │   │   └── page.tsx
   │   └── components/
   │       ├── boton.jsx
   │       └── first.jsx
   ├── public/
   ├── .next/
   ├── package.json
   ├── postcss.config.mjs
   ├── eslint.config.mjs
   ├── tsconfig.json
   └── README.md
   ```

6. **Primeros componentes**  
   Se crearon componentes personalizados en `src/components/`, como [`boton`](src/components/boton.jsx) y [`first`](src/components/first.jsx).

## Descripción de componentes

### `src/app/layout.tsx`
Este archivo define la estructura base de la aplicación, incluyendo el HTML principal, el `<head>`, y el layout general que se aplica a todas las páginas.

### `src/app/page.tsx`
Es la página principal de la aplicación. Aquí se renderizan los componentes principales y se muestra el contenido inicial al usuario.

### `src/components/boton.jsx`
Este componente representa un botón personalizado. Puede incluir estilos, eventos de clic y lógica específica para acciones dentro de la app.

### `src/components/first.jsx`
Este componente muestra un contenido o funcionalidad específica, como un mensaje de bienvenida, una sección informativa, o cualquier elemento que se quiera destacar en la página principal.

---

Cada componente está diseñado para ser reutilizable y modular, facilitando la organización y el mantenimiento del código.

7. **Configuración de scripts**  
   Los scripts principales en [`package.json`](package.json) son:
   - `dev`: Inicia el servidor de desarrollo.
   - `build`: Compila la aplicación para producción.
   - `start`: Inicia la aplicación en modo producción.
   - `lint`: Ejecuta ESLint.

8. **Primer despliegue local**  
   Para iniciar el proyecto localmente:
   ```bash
   npm run dev
   ```
   Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Guía de ESLint](https://eslint.org/docs/latest/)

---