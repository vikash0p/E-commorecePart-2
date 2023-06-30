import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    isCartMessage: false     
    
}

export const cartSllice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(state, action) {
        
                state.carts.push(action.payload)
        },

        removeToCart: (state, action) => {
            const itemId = action.payload;
            state.carts = state.carts.filter((item) => item.id !== itemId)
        },
        emptyCart: (state) => {
            state.carts = []
        },

        setCartMessageOn: (state) => {
            state.isCartMessage = true
        },
        setCartMessageOff: (state) => {
            state.isCartMessage = false
        }

    }
})


export default cartSllice.reducer;
export const { addToCart, removeToCart, emptyCart, setCartMessageOff, setCartMessageOn } = cartSllice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMessage;
export const selectAllCart = (state) => state.cart.carts;
