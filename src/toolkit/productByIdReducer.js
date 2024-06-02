import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const PRODUCT_URL = 'https://fakestoreapi.com/products';
 

export const fetchProductById = createAsyncThunk(
    PRODUCT_URL,
    async (id) => {
        const response = await axios.get(`${PRODUCT_URL}/${id}`);
        return response.data;
    },
);

const initialState = {};

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.currentProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
       

    },
});

export default productByIdSlice.reducer;