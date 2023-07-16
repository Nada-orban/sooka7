import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './Cartslice'
// import wishreducer from '../Wishlist/Wishslice'
import productreducer from '../Products/ProductSlice'

export default configureStore({
    reducer: { cart: cartreducer,
        //  wish: wishreducer,
        product: productreducer },
})