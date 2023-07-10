import React from 'react';
import { useState } from 'react';


function alertaGanador(){

    return(
        <div>
            <h1> Eres el ganador</h1>
            <img src={require('../Assets/ganador.png')} alt="Mi imagen" className='imagenPrincipal' />
            
        </div>
    )
}

export default alertaGanador