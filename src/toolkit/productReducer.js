import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const PRODUCT_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
    PRODUCT_URL,
    async (category) => {
        let response;
        if(category!==undefined && category!=="")
         response = await axios.get(`${PRODUCT_URL}/category/${category}`);
          else
            response = await axios.get(PRODUCT_URL);
         return response.data;
    },
);
 
const initialState = {};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
});

 export default productSlice.reducer;