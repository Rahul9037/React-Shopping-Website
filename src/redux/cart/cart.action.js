import {TOGGLE_CART_DROPDOWN , ADD_ITEM , REMOVE_ITEM, CLEAR_ITEM_FROM_CART} from '../../types/types';

export const toggleCartDropdown = () => ({
    type: TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type : ADD_ITEM ,
    data : item
})

export const clearItem = item =>({
    type : CLEAR_ITEM_FROM_CART ,
    data: item
})

export const removeItem = item => ({
    type : REMOVE_ITEM,
    data : item
})

