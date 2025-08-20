'use client'
import { useState } from 'react';
import Boton from '../components/boton'

export default function Home() {
  const [ mensaje, setMensaje ] = useState('');

  //función para manejra el corpontammiento del boton 
  const manejarClick = (textoBoton: string) => {
    setMensaje(`Clicaste el boton: ${textoBoton}`);

    //condicional para manejar el comportamiento de alerta
    if (textoBoton === 'Aceptar') {
      console.log('Botón aceptar presionado');
      alert('!Gracaias por aceptar presionado');
    }else if (textoBoton === 'Cancelar') {
      console.log('Botón cancelar presionado');
      alert('!Gracias por cancelar¡');
    }
  };
  return (
    <main style={{textAlign: 'center', padding: '20px'}}>
      <h1>Página principal</h1>
      {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}
      <div>
        <Boton texto="Aceptar" onClick={manejarClick}/>
        <Boton texto="Cancelar"onClick={manejarClick}/>
      </div>
    </main>

  );
}

// 'use client';
// import { useState } from "react";
// import saludo from '../components/first'


// export default function Home() {
//   const [contador, setContador] = useState(0);


//   //Variables para el contador
//   const incrementar = () => setContador(contador + 1);
//   const decrementar = () => {
//     if (contador > 0) setContador(contador - 1);
//   }  
//   const resetear = () => setContador(0);
//  //COMO TAREA, ARREGLAR EL CONTADOR PARA QUE NO DECREMENTE Y PONER ESTILOS
//   return (
//     <main style={{textAlign: 'center', padding: '50px'}}>
//       <h1>Contador Dinamico</h1>
//       <h2>{contador}</h2>

//     {/* botones */}
//     <button className="boton" onClick={incrementar}>Aumentar</button> <br />
//     <button className="boton" onClick={decrementar}>Disminuir</button><br />
//     <button className="boton" onClick={resetear}> Reiniciar</button><br />
//     </main>
//   )


// }

