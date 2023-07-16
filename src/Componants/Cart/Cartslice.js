
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cartItems:
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :
            [],
    cartTotalQuantity: 0,
    cartTotalMount: 0,


}

const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const itemindex = state.cartItems.findIndex((item) => (item.id === action.payload.id) && (item.size === action.payload.size));
            if (itemindex >= 0) {
                state.cartItems[itemindex].cartQuantity += 1
                toast.info(`increased ${action.payload.name} quantity`, {
                    position: "bottom-left"
                });
            } else {
                const tempproduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempproduct)
                // toast.success(`increased ${action.payload.name} to cart`, {
                //     position: "bottom-left"
                // });

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },
        remove: (state, action) => {
            const notremoveitems = state.cartItems.filter(item => (item.id === action.payload.id) && (item.size === action.payload.size));
            state.cartItems = notremoveitems;
            toast.warning(`remove ${action.payload.name} from cart`, {
                position: "bottom-left"
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));


        },

        increase: (state, action) => {
            const itemindex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[itemindex].cartQuantity += 1;
            toast.info(`increased ${action.payload.name} quantity`, {
                position: "bottom-left"
            });


        },
        decrease: (state, action) => {
            const itemindex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemindex].cartQuantity > 1) {
                state.cartItems[itemindex].cartQuantity -= 1;
                toast.info(`decreased ${action.payload.name} quantity`, {
                    position: "bottom-left"
                });

            } else if (state.cartItems[itemindex].cartQuantity === 1) {
                const notremoveitems = state.cartItems.filter(item => item.id !== action.payload.id);
                state.cartItems = notremoveitems;
                toast.warning(`remove ${action.payload.name} from cart`, {
                    position: "bottom-left"
                });

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        subtotal: (state, action) => {
            console.log(state.cartItems)
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartitem) => {
                const { final_price, cartQuantity } = cartitem;
                const itemtotal = final_price * cartQuantity;

                cartTotal.total += itemtotal;
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalMount = total;
            state.cartTotalQuantity = quantity;

        },
        clearcartfunc: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`cart cleared`, {
                position: "bottom-left"
            });
        },


    }
})



export const { addtocart, remove, increase, decrease, subtotal, clearcartfunc } = Cartslice.actions

export default Cartslice.reducer