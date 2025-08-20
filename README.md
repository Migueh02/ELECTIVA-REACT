# Documentación del Proyecto ELECTIVA-REACT

---

## Clase 1: Introducción a React, Inicialización y Estructura Básica

### 1. Inicialización del Proyecto
Se utilizó **Next.js** para crear el proyecto, lo que permite desarrollar aplicaciones React modernas con funcionalidades avanzadas como enrutamiento automático, renderizado del lado del servidor y optimización de recursos. Al iniciar el proyecto, se generó la estructura base, incluyendo carpetas como `src`, `public`, y archivos de configuración como `package.json`, `tsconfig.json`, entre otros.

### 2. Archivo `src/app/layout.tsx`
Este archivo define el layout global de la aplicación. Aquí se importan fuentes personalizadas y estilos globales. El componente `RootLayout` envuelve toda la aplicación y asegura que los estilos y fuentes se apliquen en todas las páginas.
- **Uso:** Permite mantener una estructura y diseño consistente en toda la app, como cabeceras, pies de página o estilos generales.
- **Ejemplo:**
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 3. Archivo `src/app/page.jsx` (o `page.tsx`)
Es la página principal que se muestra al iniciar la aplicación. Aquí se pueden mostrar componentes principales, mensajes de bienvenida o menús.
- **Uso:** Sirve como punto de entrada visual para el usuario, donde se pueden integrar otros componentes y funcionalidades.
- **Ejemplo:**
```jsx
export default function Home() {
  return <h1>Página principal</h1>;
}
```

### 4. Carpeta `src/Components`
Se creó para organizar componentes reutilizables.

#### Archivo `Boton.jsx`
Define un componente de botón personalizado. Recibe props como `texto` y `onClick` para mostrar diferentes textos y ejecutar funciones al hacer clic. Incluye estilos avanzados para mejorar la apariencia y experiencia de usuario.
- **Uso:** Permite reutilizar el mismo botón en diferentes partes de la app, manteniendo la lógica y el diseño centralizados.
- **Ejemplo:**
```jsx
export default function Boton({ texto, onClick }) {
  return <button onClick={() => onClick(texto)}>{texto}</button>;
}
```

#### Archivo `first.jsx`
Componente simple que muestra un saludo y un número.
- **Uso:** Ejemplo básico de cómo crear y exportar componentes en React.
- **Ejemplo:**
```jsx
export default function saludo() {
  return <h1>Hola mundo 1</h1>;
}
```

---

## Clase 2: Carpeta Pages y Componentes con Estado/Efectos

### 1. Carpeta `src/pages`
Se creó para agregar vistas adicionales y practicar el enrutamiento en Next.js.

#### Archivo `vistaEffect.jsx`
Componente que utiliza el hook `useEffect` de React. Permite ejecutar código cada vez que cambia el estado `nombre` (por ejemplo, mostrar un mensaje en consola). Incluye un input para que el usuario escriba su nombre, y muestra un saludo dinámico.
- **Uso:** Demuestra cómo reaccionar a cambios de estado y realizar efectos secundarios, como logs o peticiones a APIs.
- **Ejemplo:**
```jsx
import { useEffect, useState } from 'react';
export default function Mensaje() {
  const [nombre, setNombre] = useState('');
  useEffect(() => {
    console.log('El nombre es:', nombre);
  }, [nombre]);
  return (
    <div>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <p>Hola {nombre || 'invitado'}</p>
    </div>
  );
}
```

#### Archivo `vistanueva.jsx`
Componente que implementa un contador usando el hook `useState`. Permite aumentar o disminuir el valor con botones.
- **Uso:** Ejemplo práctico de manejo de estado en React, mostrando cómo actualizar la interfaz en respuesta a acciones del usuario.
- **Ejemplo:**
```jsx
import { useState } from 'react';
export default function VistaNueva() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <h2>{valor}</h2>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
      <button onClick={() => setValor(valor - 1)}>Disminuir</button>
    </div>
  );
}
```

---

## Resumen de Usos y Conceptos

- **Next.js:** Framework que facilita la creación de aplicaciones React escalables y optimizadas, con enrutamiento automático y renderizado del lado del servidor.
- **Componentes:** Bloques reutilizables que permiten dividir la interfaz en partes independientes y manejables.
- **Hooks (`useState`, `useEffect`):** Funciones especiales de React para manejar estado y efectos secundarios en componentes funcionales.
- **Layout Global:** Permite definir estilos y estructuras que se aplican en toda la aplicación.
- **Enrutamiento:** Next.js crea rutas automáticamente según la estructura de carpetas y archivos en `pages` y `app`.

Esta estructura y los ejemplos desarrollados te permiten entender cómo organizar un proyecto React moderno, cómo reutilizar componentes y cómo manejar la lógica de estado y efectos en tus aplicaciones.