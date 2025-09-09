'use client';
import { useEffect, useState } from 'react';

// UseEffect -> para consumir API
// Renderizado condicional -> cargando...
// map() -> renderizar la informacion
// Diseño grid o flexbox

export default function Products() {
    // Arreglo estático de productos básicos
    const productosBasicos = [
        { id: 1, nombre: "Manzana", precio: 2000, descripcion: "Fruta fresca y saludable.", imagen: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=100&q=80" },
        { id: 2, nombre: "Banano", precio: 1500, descripcion: "Fuente de energía natural.", imagen: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=100&q=80" },
        { id: 3, nombre: "Naranja", precio: 1800, descripcion: "Rica en vitamina C.", imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=100&q=80" }
    ];

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    };

    // useEffect para llamar a la API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(error => {
                setError(true);
                setCargando(false);
            })
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '30px' }}>
            <h1>Lista de productos básicos</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '20px',
            }}>
                {productosBasicos.map(producto => (
                    <div key={producto.id} style={{border:'1px solid #ccc', borderRadius:'8px', padding:'10px', margin:'0 auto'}}>
                        <img src={producto.imagen} alt={producto.nombre} width="100" height="100" />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                        <p>{producto.descripcion}</p>
                        <button onClick={() => agregarProducto(producto)} style={{padding:'8px 16px', borderRadius:'6px', background:'#1976d2', color:'white', border:'none', cursor:'pointer'}}>Agregar Producto</button>
                    </div>
                ))}
            </div>

            <h1 style={{marginTop:'40px'}}>Lista de productos desde API</h1>
            {/* Renderizado condicional */}
            {cargando ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p style={{color:'red'}}>Error al cargar productos ❌</p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px',
                }}>
                    {productos.map(producto => (
                        <div key={producto.id} style={{border:'1px solid #ccc', borderRadius:'8px', padding:'10px'}}>
                            <img src={producto.image} alt={producto.title} width="100" height="100" />
                            <h3>{producto.title}</h3>
                            <p>${producto.price}</p>
                            <p>{producto.description}</p>
                            <button onClick={() => agregarProducto(producto)} style={{padding:'8px 16px', borderRadius:'6px', background:'#1976d2', color:'white', border:'none', cursor:'pointer'}}>Agregar Producto</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}