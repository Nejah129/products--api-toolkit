import { createSlice } from '@reduxjs/toolkit'
 

 const initialState = {
    products: [],
    total:0,
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem: (state, action) => {
        let currentProduct=state.products.find(p=>p.id===action.payload.id);
        if(currentProduct!==undefined)
            state.products = state.products.map(el => el.id === action.payload.id ? { ...el, quantity: el.quantity+1} : el)
        else 
            state.products = [...state.products, {...action.payload,quantity:1}]
        state.total=state.total+action.payload.price
     },
    deleteItem: (state, action) => {
        if(action.payload.quantity>1)
            state.products = state.products.map(el => el.id === action.payload.id ? { ...el, quantity: el.quantity-1} : el)
        else 
            state.products =state.products.filter(el=>el.id!==action.payload.id) 
        state.total=state.total-action.payload.price
   
    },
      
  },
})

export const { addItem, deleteItem } = cardSlice.actions

export default cardSlice.reducer