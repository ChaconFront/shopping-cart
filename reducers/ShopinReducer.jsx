import { TYPES } from "../actions/ShopinAction";

export const ShopinInitialState = {
    productos: [
        { id: 1, name: "Producto1", price: 100 },
        { id: 2, name: "Producto2", price: 200 },
        { id: 3, name: "Producto3", price: 300 },
        { id: 4, name: "Producto4", price: 400 },
        { id: 5, name: "Producto5", price: 500 },

    ],
    cart: []
}


export function ShopinReducer(state, action) {

    switch (action.type) {
        case TYPES.ADD_TO_CARD: {
            let newItem = state.productos.find((product) => product.id === action.payload);
            //console.log(newItem);
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item)
                }

                : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] }

        }
        case TYPES.REMOVE_ONE_FORM_CARD: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item)
            } : 
            {
                ...state,
                cart:state.cart.filter(item=>item.id!==action.payload)
            }
        }

        case TYPES.REMOVE_ALL_FORM_CARD: {
            return {
                ...state,
                cart:state.cart.filter(item=>item.id!==action.payload)
            }
         }


        case TYPES.CLEAR_CARD: {
            return ShopinInitialState;
        }

        default:
            return state
    }

}