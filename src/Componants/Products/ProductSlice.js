import { createSlice } from '@reduxjs/toolkit'
import Allproducts from '../../db.json';

const initialState = {
    data: [],
    products: Allproducts,
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        categoryfunc: (state, action) => {
            const result = state.products.filter((curr) => {
                return curr.category === action.payload;
            });
            state.data = result;

        },
        genderfunc: (state, action) => {
            const genres = state.products.filter((curr) => {
                return curr.gender === action.payload;
            });
            state.data = genres;
        }

    }

})

export const { categoryfunc, genderfunc } = ProductSlice.actions
export default ProductSlice.reducer