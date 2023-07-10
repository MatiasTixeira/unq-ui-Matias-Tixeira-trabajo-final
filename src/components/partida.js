import React from 'react';
import 'partida.css'

function partida() {

    return(
        <div>
            <div>
                <img src={require('../src/Assets/logo.jpg')} alt="Mi imagen" className='imagenPrincipal' />
            </div>
            <div>
                <button  className='botonJugador'>Piedra</button>
                <button  className='botonJugador'>Papel</button>
                <button  className='botonJugador'>tijera</button>
                <button  className='botonJugador'>Lagarto</button>
                <button  className='botonJugador'>Spock</button>
                <button  className='botonJugar'>Jugar!</button>
            </div>
    </div>
    )

}

export default partida;