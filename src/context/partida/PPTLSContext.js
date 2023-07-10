import React, { createContext, useState } from 'react';

const PPTLSContext = createContext({

    state:{
        ronda: 0,
        rondasGanadas: 0,
        rondasPerdidas: 0, // si empata cuenta como derrota
        eleccionJugador: 9, //Solo puede haber opciones del 0 al 4 por eso esta el nueve
        eleccionMaquina: 9, //Solo puede haber opciones del 0 al 4 por eso esta el nueve
    },
    queries:{
        getRonda : () => {},
        getRondasGanadas : () => {},
        getRondasPerdidas : () => {},
        getElecionDelJugador : () => {},
        getEleccionDeLaMaquina : () => {}
    },
    actions:{
        generarEleccionDeLaMaquina : () => {},
        eleccionDelJugador : (opcion) => {},
        verQuienGano : (eleccionJugador, eleccionMaquina) => {}
    }

});

const PPTLSProvider = () => {
    const initialJuegoState = {
        ronda: 0,
        rondasGanadas: 0,
        rondasPerdidas: 0,
        eleccionJugador: 9, 
        eleccionMaquina: 9,
    }

    const[juegoState, setJuegoState] = useState(initialJuegoState);

    const getRonda = () => {return(juegoState.ronda)};

    const getRondasGanadas = () => {return(juegoState.rondasGanadas)};

    const getRondasPerdidas = () => {return(juegoState.rondasPerdidas)};

    const getElecionDelJugador = () => {return(juegoState.eleccionJugador)};

    const getEleccionDeLaMaquina = () => {return(juegoState.eleccionMaquina)};

    const generarEleccionDeLaMaquina = () => {
        setJuegoState({
            ronda: getRonda,
            rondasGanadas: getRondasGanadas,
            rondasPerdidas: getRondasPerdidas,
            eleccionJugador: getElecionDelJugador, 
            eleccionMaquina: generarUnNumeroAleatorio(0,4),    
        })
    }

    const eleccionDelJugador = (opcion) => {
        setJuegoState({
            ronda: getRonda,
            rondasGanadas: getRondasGanadas,
            rondasPerdidas: getRondasPerdidas,
            eleccionJugador: opcion, 
            eleccionMaquina: getEleccionDeLaMaquina,    
        })
    }

    const verQuienGano = () => {
        let eleccionJugador = getElecionDelJugador
        let eleccionDeLaMaquina = getEleccionDeLaMaquina
        let rondasGanadas = getRondasGanadas
        let rondasPerdidas = getRondasPerdidas
        let ronda = getRonda
        // 0 = piedra
        // 1 = papel
        // 2 = tijera
        // 3 = lagarto
        // 4 = spock
        if( eleccionJugador === 0){
            if (eleccionDeLaMaquina === 0){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("empate")
            }
            if (eleccionDeLaMaquina === 1){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 2){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 3){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 4){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
        } else if( eleccionJugador === 1){
            if (eleccionDeLaMaquina === 0){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 1){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("empate")
            }
            if (eleccionDeLaMaquina === 2){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 3){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 4){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
        } else if( eleccionJugador === 2){
            if (eleccionDeLaMaquina === 0){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 1){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 2){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("empate")
            }
            if (eleccionDeLaMaquina === 3){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 4){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
        } else if( eleccionJugador === 3){
            if (eleccionDeLaMaquina === 0){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 1){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 2){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 3){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("empate")
            }
            if (eleccionDeLaMaquina === 4){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
        } else if( eleccionJugador === 4){
            if (eleccionDeLaMaquina === 0){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 1){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 2){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("perdiste")
            }
            if (eleccionDeLaMaquina === 3){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas + 1,
                    rondasPerdidas: rondasPerdidas,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("ganaste")
            }
            if (eleccionDeLaMaquina === 4){
                setJuegoState({
                    ronda: ronda + 1,
                    rondasGanadas: rondasGanadas,
                    rondasPerdidas: rondasPerdidas + 1,
                    eleccionJugador: eleccionJugador, 
                    eleccionMaquina: eleccionDeLaMaquina,    
                })
                return("empate")
            }
        }
    }

    const queries = {
        getRonda,
        getRondasGanadas,
        getRondasPerdidas,
        getElecionDelJugador,
        getEleccionDeLaMaquina
    }

    const actions = {
        generarEleccionDeLaMaquina,
        eleccionDelJugador,
        verQuienGano
    }

    const generarUnNumeroAleatorio = (minimo, maximo) => {
        var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
        return numero;
    }

    return(
        <PPTLSContext.Provider value = {{
            state: juegoState,
            queries: queries,
            actions: actions
        }}></PPTLSContext.Provider>
    )
}

export {PPTLSContext}