import React from 'react';
import 'Partida.css';
import { useContext } from 'react';
import { PPTLSContext } from '../context/partida/PPTLSContext';
import AlertaGanador from './Alertas/AlertaGanador';
import AlertaPerdedor from './Alertas/AlertaPerdedor';
import AlertaEmpate from './Alertas/AlertaEmpate';

function Partida() {

    const {actions} = useContext(PPTLSContext);

    const  elegirOpcion = (opcion) => {
        actions.eleccionDelJugador(opcion)
    }

    const empezarPartida = () => {
        let resultado = actions.verQuienGano()
        if ( resultado === "ganaste"){
            <AlertaGanador />
        } else if ( resultado === "perdiste"){
            <AlertaPerdedor />
        } else {
            <AlertaEmpate />
        }
    }

    return(
        <div>
            <div>
                <img src={require('../src/Assets/logo.jpg')} alt="Mi imagen" className='imagenPrincipal' />
            </div>
            <div>
                <button  onClick={elegirOpcion(0)} className='botonJugador'>Piedra</button>
                <button  onClick={elegirOpcion(1)} className='botonJugador'>Papel</button>
                <button  onClick={elegirOpcion(2)} className='botonJugador'>tijera</button>
                <button  onClick={elegirOpcion(3)} className='botonJugador'>Lagarto</button>
                <button  onClick={elegirOpcion(4)} className='botonJugador'>Spock</button>
                <button  onClick={empezarPartida} className='botonJugar'>Jugar!</button>
            </div>
    </div>
    );

}

export default Partida;