import React, { useReducer } from "react";


const initialState = { contador: 0 };

//esta funcion init lo que recibe siempre es el estado inicial.
//esntonces como el estado es un objeto eso es lo que va a retornar.
const init=(initialState)=>{

  return {
    //retorna en la propiedad contador lo que vale el objeto initialState +100
    contador:initialState.contador +100,
  }
}

const TYPES = {
  INCREMENT_5: "INCREMENT_5",
  INCREMENT: "INCREMENT",
  DECREMENT_5: "DECREMENT_5",
  DECREMENT: "DECREMENT"
}


function reducer(state, action) {

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
      return initialState;
    default:
      return state;
  }


}

const Contador = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState,init )

  const sumar5 = () => { dispatch({ type: TYPES.INCREMENT_5 }) }
  const sumar = () => { dispatch({ type: TYPES.INCREMENT }) }
  const restar = () => { dispatch({ Type: TYPES.DECREMENT }) }
  const restar5 = () => { dispatch({ Type: TYPES.DECREMENT_5 }) }
  const reset = () => { dispatch({ Type: TYPES.RESET }) }
  return (
    <div>
      <h2>Contador</h2>
      <button onClick={sumar5}>5+</button>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>5-</button>
      <button onClick={reset}>resetear</button>

      <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador;