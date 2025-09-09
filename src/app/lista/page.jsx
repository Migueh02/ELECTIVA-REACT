'use client';
import{useState} from 'react';

// Crear una lista barica con mpa{}

export default function Pages(){
    const [tareas, setTareas] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== "") {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    return(
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <h1>Lista de Tareas</h1>
            <div style={{marginBottom: '20px'}}>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={e => setNuevaTarea(e.target.value)}
                    placeholder="Nueva tarea"
                    style={{padding: '8px', borderRadius: '6px', border: '1px solid #ccc', marginRight: '8px'}}
                />
                <button
                    onClick={agregarTarea}
                    style={{padding: '8px 16px', borderRadius: '6px', background: '#1976d2', color: 'white', border: 'none', cursor: 'pointer'}}
                >Agregar tarea</button>
            </div>
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