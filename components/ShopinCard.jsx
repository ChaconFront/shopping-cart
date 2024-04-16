import React, { useReducer } from "react"
import { ShopinInitialState, ShopinReducer } from "../reducers/ShopinReducer"
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../actions/ShopinAction";


const ShopinCard = () => {
  const [state, dispatch] = useReducer(ShopinReducer, ShopinInitialState)
  const { productos, cart } = state;

  const addToCart = (id) => {
    // console.log(id)
    dispatch({ type: TYPES.ADD_TO_CARD, payload: id })
  }
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_All_FORM_CARD, payload: id })
    }else{
      dispatch({ type: TYPES.REMOVE_ONE_FORM_CARD, payload: id })
    }
  }


  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CARD })
  }

  return (
    <div>
      <h2>Carrito de compra</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart} />)}
      </article>
      <h3>Carrito</h3>
      <article className="box ">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
        }
      </article>
    </div>
  )
}

export default ShopinCard