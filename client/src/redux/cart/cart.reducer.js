import { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART, CLEAR_CART } from '../../types/types';
import { addItemsToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: 'true',
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.data)
            }

        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(CartItem => CartItem.id !== action.data.id)
            }

        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.data)
            }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }

}

export default CartReducer;