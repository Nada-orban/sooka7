
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    wishItems: localStorage.getItem('wishItems') ? JSON.parse(localStorage.getItem('wishItems')) : [],
    wishTotalQuantity: 0,


}
const Wishslice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addtowishlist: (state, action) => {
            const itemindex = state.wishItems.findIndex((item) => item.id === action.payload.id);
            if (itemindex >= 0) {
                state.wishItems[itemindex].cartQuantity = 1
                toast.info(`${action.payload.name} has been in wishList `, {
                    position: "bottom-left"
                });
            } else {
                const tempproduct = { ...action.payload, cartQuantity: 1 }
                state.wishItems.push(tempproduct)
                toast.success(`add ${action.payload.name} to wishList`, {
                    position: "bottom-left"
                });
            }
            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
        },
        quantity: (state, action) => {
            let { quantity } = state.wishItems.reduce((wishTotal, wishitem) => {
                const { cartQuantity } = wishitem;
                wishTotal.quantity += cartQuantity;
                return wishTotal;
            }, {
                quantity: 0
            });
            state.wishTotalQuantity = quantity;

        },
        remove: (state, action) => {
            const notremoveitems = state.wishItems.filter(item => item.id !== action.payload.id);
            state.wishItems = notremoveitems;
            toast.warning(`remove ${action.payload.name} from wishList`, {
                position: "bottom-left"
            });
            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));


        }


    }

}
)
export const { addtowishlist, quantity, remove } = Wishslice.actions

export default Wishslice.reducer