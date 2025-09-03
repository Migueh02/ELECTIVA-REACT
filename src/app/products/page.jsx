'use client';
import { useEffect, useState } from 'react';

// UseEffect -> para consumir API
// Renderizado condicional -> cargando...
// map() -> renderizar la informacion
// Diseño grid o flexbox

export default function Products() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // useEffect para llamar a la API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
                setCargando(false);
            })
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '30px' }}>
            <h1>Lista de productos</h1>
            {/* ternario */}
            {cargando ? (
                <p>Cargando productos...</p>
            ): (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px',

                }}>
                    {/* Map para renderizar los productos */}
                    {productos.map(producto => (
                        <div key={producto.id}
                        style={{border:'1px solid #ccc',
                            borderRadius:'8px',
                            padding:'10px'
                        }}>
                            <img src={producto.image} alt={producto.title} width="100" height="100" />
                            
                            <h3>{producto.title}</h3>
                            <p>{producto.price}</p>
                            
                              </div>
                    ))}
                            
                </div>
            )}
        </div>
    );
}