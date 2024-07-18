import React from 'react';
import '../css/estilo.css';
import reactLogo from '../img/react.png'

function Componente() {
  return (
    <div className="componente1">
      <h1>¿Qué es React?</h1>
      <p>
        React es una biblioteca de JavaScript para construir interfaces de usuario.
        Es mantenida por Facebook y una comunidad de desarrolladores individuales y empresas.
      </p>
      <h2>Características Principales</h2>
      <ul>
        <li>Componentes: React permite construir interfaces de usuario encapsuladas en componentes.</li>
        <li>JSX: Una sintaxis que permite escribir elementos de React con una sintaxis similar a HTML.</li>
        <li>Virtual DOM: React usa un DOM virtual para mejorar el rendimiento y la eficiencia de las actualizaciones de la UI.</li>
        <li>Unidirectional Data Flow: El flujo de datos en una sola dirección facilita la comprensión y el mantenimiento del código.</li>
      </ul>
      <img src={reactLogo} alt="react logo" className="react-logo" />
      <button onClick={() => alert('Botón presionado')} className="boton">
        Click
      </button>
    </div>
  );
}

export default Componente;
