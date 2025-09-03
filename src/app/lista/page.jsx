'use client';
import{useState} from 'react';

// Crear una lista barica con mpa{}

export default function Pages(){
    const [tareas, setTareas] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);

    return(
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <h1>Lista de Tareas</h1>
            <ul style={{listStyleType: 'center', padding: 0}}>
                {tareas.map((tarea, index) => (
                    <li key={index}
                        style={{
                            margin: '10px 0 34px 1px',
                            padding: '10px',
                            border: '1px solid gray',
                            borderRadius: '8px',
                        }}>
                            {tarea}
                    </li>
                ))}
            </ul>
        </div>
    );
}