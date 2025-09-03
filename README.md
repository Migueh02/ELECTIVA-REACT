# Novedades en el Proyecto ELECTIVA-REACT

## Nuevas páginas y componentes

### 1. Página de Lista de Tareas (`src/app/lista/page.jsx`)
- Muestra una lista básica de tareas usando `useState` y `map`.
- Permite visualizar dinámicamente una lista en la ruta `/lista`.
- Ejemplo:
```jsx
'use client';
import { useState } from 'react';
export default function Pages() {
  const [tareas, setTareas] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);
  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{margin: '10px 0', padding: '10px', border: '1px solid gray', borderRadius: '8px'}}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 2. Página de Productos (`src/app/products/page.jsx`)
- Consume una API externa (`https://fakestoreapi.com/products`) y muestra productos.
- Utiliza `useEffect` para llamadas a APIs, renderizado condicional y diseño en grid.
- Ejemplo:
```jsx
'use client';
import { useEffect, useState } from 'react';
export default function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => {
        setCargando(false);
      });
  }, []);
  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <h1>Lista de productos</h1>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
          {productos.map(producto => (
            <div key={producto.id} style={{border: '1px solid #ccc', borderRadius: '8px', padding: '10px'}}>
              <img src={producto.image} alt={producto.title} style={{width: '100px', height: '100px', objectFit: 'contain'}} />
              <h3>{producto.title}</h3>
              <p>${producto.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 3. Componente Navbar (`src/Components/Navbar.jsx`)
- Barra de navegación con enlaces a `/`, `/lista` y `/products`.
- Permite navegar fácilmente entre las páginas principales.
- Ejemplo:
```jsx
'use client';
import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={{backgroundColor: '#333', padding: '15px', display: 'flex', justifyContent: 'space-around'}}>
      <Link href="/" style={{color:'white', textDecoration: 'none'}}>Inicio</Link>
      <Link href="/lista" style={{color:'white', textDecoration: 'none'}}>Listas Basicas</Link>
      <Link href="/products" style={{color:'white', textDecoration: 'none'}}>Productos API</Link>
    </nav>
  );
}
```

### 4. Actualización de Layout (`src/app/layout.tsx`)
- Ahora incluye el componente `Navbar` para navegación global.
- Ejemplo:
```tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

---

# Documentación Detallada del Proyecto ELECTIVA-REACT

## Estructura General del Proyecto

El proyecto utiliza **Next.js** para crear una aplicación React moderna, con enrutamiento automático y renderizado del lado del servidor. La estructura principal incluye:
- `src/app/` : Contiene las páginas y layouts principales.
- `src/Components/` : Componentes reutilizables para toda la aplicación.
- `public/` : Archivos estáticos como imágenes y SVG.

## Páginas y Funcionalidades

### 1. Página de Lista de Tareas (`src/app/lista/page.jsx`)
- **Funcionalidad:** Muestra una lista básica de tareas usando el hook `useState` y el método `map` para renderizar dinámicamente los elementos.
- **Características:**
  - Permite visualizar una lista en la ruta `/lista`.
  - Cada tarea se muestra en un elemento estilizado.
- **Código de ejemplo:**
```jsx
'use client';
import { useState } from 'react';
export default function Pages() {
  const [tareas, setTareas] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);
  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{margin: '10px 0', padding: '10px', border: '1px solid gray', borderRadius: '8px'}}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 2. Página de Productos (`src/app/products/page.jsx`)
- **Funcionalidad:** Consume una API externa (`https://fakestoreapi.com/products`) y muestra una lista de productos.
- **Características:**
  - Utiliza `useEffect` para realizar la llamada a la API al cargar la página.
  - Renderizado condicional para mostrar un mensaje de "Cargando..." mientras se obtienen los datos.
  - Los productos se muestran en un diseño tipo grid.
- **Código de ejemplo:**
```jsx
'use client';
import { useEffect, useState } from 'react';
export default function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => {
        setCargando(false);
      });
  }, []);
  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <h1>Lista de productos</h1>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
          {productos.map(producto => (
            <div key={producto.id} style={{border: '1px solid #ccc', borderRadius: '8px', padding: '10px'}}>
              <img src={producto.image} alt={producto.title} style={{width: '100px', height: '100px', objectFit: 'contain'}} />
              <h3>{producto.title}</h3>
              <p>${producto.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 3. Componente Navbar (`src/Components/Navbar.jsx`)
- **Funcionalidad:** Barra de navegación con enlaces a las rutas principales (`/`, `/lista`, `/products`).
- **Características:**
  - Permite navegar fácilmente entre las páginas principales.
  - Estilizada con fondo oscuro y enlaces claros.
- **Código de ejemplo:**
```jsx
'use client';
import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={{backgroundColor: '#333', padding: '15px', display: 'flex', justifyContent: 'space-around'}}>
      <Link href="/" style={{color:'white', textDecoration: 'none'}}>Inicio</Link>
      <Link href="/lista" style={{color:'white', textDecoration: 'none'}}>Listas Basicas</Link>
      <Link href="/products" style={{color:'white', textDecoration: 'none'}}>Productos API</Link>
    </nav>
  );
}
```

### 4. Actualización de Layout (`src/app/layout.tsx`)
- **Funcionalidad:** Incluye el componente `Navbar` para que la barra de navegación esté presente en todas las páginas.
- **Características:**
  - Mejora la experiencia de usuario permitiendo la navegación global.
  - Utiliza tipado con TypeScript para mayor robustez.
- **Código de ejemplo:**
```tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

## Renderizado Condicional en React

- **Ternarios y if-else:** Permiten mostrar contenido según condiciones.
- **Ejemplo práctico:**
```jsx
{
  productos.length > 0
    ? <p>Hay productos disponibles</p>
    : <p>No hay productos</p>
}
```

## Buenas Prácticas y Conceptos Clave

- **Componentización:** Divide la interfaz en componentes reutilizables y fáciles de mantener.
- **Hooks:** Utiliza `useState` para manejar estados locales y `useEffect` para efectos secundarios como llamadas a APIs.
- **Enrutamiento automático:** Next.js crea rutas según la estructura de carpetas y archivos en `app` y `pages`.
- **Estilos globales y locales:** Usa `globals.css` para estilos generales y módulos CSS para estilos específicos de componentes.
- **Consumo de APIs:** Utiliza `fetch` dentro de `useEffect` para obtener datos externos y renderizarlos dinámicamente.

Esta documentación te ayudará a entender la estructura, el propósito y el funcionamiento de cada parte nueva del proyecto, facilitando el desarrollo y la ampliación futura de la aplicación.