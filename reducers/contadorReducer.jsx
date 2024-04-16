import { TYPES } from "../actions/contadorAction";

export const contadorInitialState = { contador: 0 };
//esta funcion init lo que recibe siempre es el estado inicial.
//esntonces como el estado es un objeto eso es lo que va a retornar.
export const contadorInit = (initialState) => {

    return {
        //retorna en la propiedad contador lo que vale el objeto initialState +100
        contador: initialState.contador + 100,
    }
};



export function contadorReducer(state, action) {

    switch (action.type) {
        case TYPES.INCREMENT_5:
            return { contador: state.contador + 5 };

        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };

        case TYPES.DECREMENT_5:
            return { contador: state.contador - 5 };

        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };

        case TYPES.RESET:
            return contadorInitialState;
        default:
            return state;
    }


};