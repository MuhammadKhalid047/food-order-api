import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addToCart : [
    ],
    // sushi: { name: 'Sushi', price: 22.99, order: 0, total: 0 },
    // schnitzel: { name: 'Schnitzel', price: 16.50, order: 0, total: 0 },
    // burger: { name: 'Burger', price: 12.99, order: 0, total: 0 },
    // bowl: { name: 'Bowl', price: 18.99, order: 0, total: 0 },
}
const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.addToCart.push(action.payload)
        },
        updateOrder: (state, action) => {
            const { item, quantity } = action.payload;
            state[item].order += quantity;
            state[item].total = state[item].order * state[item].price;
          },
          updateCart: (state, action) => {
            const { name, quantity } = action.payload;
            const item = state.addToCart.find((item) => item.name === name);
            if (item) {
              item.order += quantity;
              item.total = item.order * item.price;
            }
        }
       
    },
})

export const { updateOrder,addToCart ,updateCart} = orderSlice.actions
export default orderSlice.reducer
