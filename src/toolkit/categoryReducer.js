import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const category_URL = 'https://fakestoreapi.com/products/categories';

export const fetchcategories = createAsyncThunk(
    category_URL,
    async () => {
        const response = await axios.get(category_URL);
        return response.data;
    },
);
 

const initialState = {};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchcategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchcategories.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(fetchcategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
    },
});

export default categorySlice.reducer;