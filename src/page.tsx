'use client';

import React, { useState } from 'react';
import Boton from './Components/Boton';

export default function Home() {
    const [mensaje, setMensaje ] = useState('');

    const manejarClick = (textoBoton: string) => {
        setMensaje(`Clicante el boton: ${textoBoton}`);

        if (textoBoton === 'Aceptar') {
            console.log('Boton Aceptar presionado');
            alert('¡Gracias por aceptar!');
        }else if (textoBoton === 'Cancelar') {
            console.log('¡Boton Cancelar presionado!');
            alert('¡Gracias por cancelar!');
        }
    };
    return (
        <main style={{textAlign: 'center', padding: '20px'}}>
            <h1>Pagina Principal</h1>
            {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}
            <div>
                <Boton texto="Aceptar" onClick={manejarClick}  />
                <Boton texto="Cancelar" onClick={manejarClick}/>
            </div>
        </main>
    );
}