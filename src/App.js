import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [opcionDelJugador, setoOpcionJugador] = useState(0);
  const [opcionDeLaMaquina, setoOpcionMaquina] = useState(0);
  
  const generarUnNumeroAleatorio = (minimo, maximo) => {
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
  }

  const jugar = () => {
    setoOpcionMaquina(generarUnNumeroAleatorio(0,4))
    console.log('Opcion del jugador')
    console.log(opcionDelJugador)
    console.log('Opcion de la maquina')
    console.log(opcionDeLaMaquina)
  }

  return (
    <div>
      <div>
        <img src={require('../src/Assets/logo.jpg')} alt="Mi imagen" className='imagenPrincipal' />
      </div>
      <div>
        <button onClick={() => setoOpcionJugador(0)} className='botonJugador'>Piedra</button>
        <button onClick={() => setoOpcionJugador(1)} className='botonJugador'>Papel</button>
        <button onClick={() => setoOpcionJugador(2)} className='botonJugador'>tijera</button>
        <button onClick={() => setoOpcionJugador(3)} className='botonJugador'>Lagarto</button>
        <button onClick={() => setoOpcionJugador(4)} className='botonJugador'>Spock</button>
        <button onClick={jugar} className='botonJugar'>Jugar!</button>
      </div>
    </div>
  );
}

// <img src={require('../src/Assets/ganador.png')} alt="Mi imagen" className='imagenGanador' />

export default App;
