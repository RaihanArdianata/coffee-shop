import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
};

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			state.cart.push(action.payload);
		},

        removeItemFromCart(state, action) {
			state.cart = state.cart.filter((item)=>{
                if(item.qty > 0 && item.id == action.payload.id){
                    item.qty -= 1;
                    return item;
                }else{
                    item.id !== action.payload.id
                }
            })
		},
	},
});

export const { addItemToCart, removeItemFromCart } = CartSlice.actions;

export default CartSlice.reducer;
