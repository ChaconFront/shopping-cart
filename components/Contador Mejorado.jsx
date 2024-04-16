import React, { useReducer } from "react";
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducer";
import { TYPES } from "../actions/contadorAction";


const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

  const sumar5 = () => { dispatch({ type: TYPES.INCREMENT_5 }) }
  const sumar = () => { dispatch({ type: TYPES.INCREMENT }) }
  const restar = () => { dispatch({ Type: TYPES.DECREMENT }) }
  const restar5 = () => { dispatch({ Type: TYPES.DECREMENT_5 }) }
  const reset = () => { dispatch({ Type: TYPES.RESET }) }
  return (
    <div>
      <h2>Contador Mejorado reducer</h2>
      <button onClick={sumar5}>5+</button>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>5-</button>
      <button onClick={reset}>resetear</button>

      <h3>{state.contador}</h3>
    </div>
  )
};

export default ContadorMejorado;