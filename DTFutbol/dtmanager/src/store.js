import { createStore } from "redux";

const initialState = { //objeto
    jugadores: [
        { id: 1, nombre: 'Messi', foto: 'https://www.elgrafico.com/__export/1561391565489/sites/prensagrafica/img/2019/06/24/messi32_crop1561391562520.jpg_1005196607.jpg' },
        { id: 2, nombre: 'Ronaldo', foto: 'https://hdqwalls.com/download/cristiano-ronaldo-new-320x240.jpg' },
        { id: 3, nombre: 'Neymar', foto: 'http://aldesnudo.hn/wp-content/uploads/2019/04/gettyimages-1085271722_crop1554232228457.jpg_1005196607.jpg' }
    ],

    titulares: [
    ],

    suplentes: [
    ]
}

const reducerEntrenador = (state = initialState, action) => { //declaro el valor inicial de state
    switch (action.type) {
        case 'AGREGAR_TITULAR':
            return {
                ...state, //retorno todo lo q tenga el estado
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            };
       
        case 'AGREGAR_SUPLENTE':
            return {
                ...state, //retorno todo lo q tenga el estado
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }

        case 'ELIMINAR_TITULAR':
            return {
                ...state, //retorno todo lo q tenga el estado
                jugadores: state.jugadores.concat(action.jugador),
                titulares: state.titulares.filter(j => j.id !== action.jugador.id)
            }

        case 'ELIMINAR_SUPLENTE':
            return {
                ...state, //retorno todo lo q tenga el estado
                jugadores: state.jugadores.concat(action.jugador),
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id)
            }
        default:
            break;
    }
    return state
}

export default createStore(reducerEntrenador) //recibe como parametro a una o varias FUNCION REDUCTORA, encargada de hacer los cambios en nuestra app