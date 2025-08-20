/* 
    useEffect {() => {
        -- accion que quiero que se ejecute
    }, [dependencias]) -- array de dependencias{
*/

// Generar una vista que al ejecutar un efecto, muestre un mensaje en consola

'Use client';
import { use, useEffect, useState } from 'react';

export default function Menjase(){
    const [nombre, setNombre] = useState('');

    // useEffect(() => {
    useEffect(() => {
        console.log('El nombre es:', nombre);
    }, [nombre]); // Dependencia: nombre

    return (
        <div style={{textAlign: 'center'}}>
            <input 
                type="text" 
                placeholder='Escribe tu nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <p>Hola {nombre || "invitado"}</p>
        </div>
    );
}





