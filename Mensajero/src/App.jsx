// src/App.jsx
import React from 'react';
import Mensaje from './componentes/Mensaje';

const DATA_MOOK = [
  {
    author: 'pepe',
    content: 'Hola?',
    fecha: 'ayer a 15:34',
    estado: 'visto',
    id: 1
  },
  {
    author: 'yo',
    content: 'Sos real OMG',
    fecha: 'ayer a 15:35',
    estado: 'visto',
    id: 2
  },
  {
    author: 'pepe',
    content: 'Obviamente, acaso lo dudaste?',
    fecha: 'ayer a 15:36',
    estado: 'visto',
    id: 3
  },
  {
    author: 'yo',
    content: 'Jamas.',
    fecha: 'ayer a 15:37',
    estado: 'entregado',
    id: 4
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>Chat</h1>
      <div className="chat">
        {DATA_MOOK.map(mensaje => (
          <Mensaje
            key={mensaje.id}
            author={mensaje.author}
            content={mensaje.content}
            fecha={mensaje.fecha}
            estado={mensaje.estado}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
