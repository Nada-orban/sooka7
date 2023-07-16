import React, { useState } from 'react'
import './Cart.css'
import { BsSuitHeart, BsTrash } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increase, decrease, subtotal, clearcartfunc } from './Cartslice'
import { useEffect } from 'react';
// import { addtowishlist } from '../Wishlist/Wishslice'




function Cart() {
    const cart = useSelector(state => state.cart)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(subtotal())
    }, [cart, dispatch])

    const handleremove = (item) => {
        dispatch(remove(item));
    }
    const handleclearcart = () => {
        dispatch(clearcartfunc())
    }
    // const handleaddtowishlist = (item) => {
    //     dispatch(addtowishlist(item))
    // }


    return (
        <div className='cart mb-5'>
            <div className='container'>
                <h3>Your Cart</h3>
                {cart.cartItems.length === 0 ? (<div className='empty cart'><p>There are no items in your bag.</p></div>) : (
                    <div className='cart-details'>
                        <div className='row mt-5'>
                            <div className='col-lg-8 col-md-7 col-sm-12'>
                                {
                                    cart.cartItems?.map((item) => (
                                        <div className='box shadow p-3 mb-5 bg-body rounded' key={item.id}>
                                            <div className='row d-flex justify-content-between'>
                                                <div className='col-7 d-flex  justify-content-between'>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <img className='img-fluid rounded' src={item.images[0]} alt='' />
                                                        </div>
                                                        <div className='col-6 box-details  '>
                                                            <h5>{item.name}</h5>
                                                            <span className="text-uppercase text-muted brand">{item.gender}</span>
                                                            <div className=' mt-5'>
                                                                <h6 className='size'>size: {item.size}</h6>
                                                                <div className="quantity mt-4 d-flex  justify-content-center gap-3  w-50 ">
                                                                    <div className='decrease' onClick={() => dispatch(decrease(item))}>-</div>
                                                                    <div className='counter'>{item.cartQuantity}</div>
                                                                    <div className='increase' onClick={() => dispatch(increase(item))}>+</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-2  position-relative'>
                                                    <div className='price'>
                                                        <h6 className='text-end pe-3'>$ {item.final_price}</h6>
                                                    </div>
                                                    <div className='icons d-flex  justify-content-end gap-3 position-absolute bottom-0 end-0 pe-3'>
                                                        {/* <div className='favorite-icon ' onClick={() => handleaddtowishlist(item)}><BsSuitHeart /></div> */}
                                                        <div className='trash-icon ' onClick={() => handleremove(item)}><BsTrash /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                <button type="button" className="btn btn-outline-secondary rounded-pill " onClick={() => handleclearcart()}>Clear Cart</button>
                            </div>
                            <div className='summary-details col-lg-4 col-md-5 col-sm-12 shadow p-3 mb-5 bg-body rounded' >
                                <h4 className='pt-2'> Summary</h4>
                                <div className='promo-code'>
                                    <h6 className='code-details' onClick={() => setOpen(!open)}>Do you have a Promo Code?<span className='px-2' >{!open ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></h6>
                                    {open && <div>
                                        <input type='text' className='rounded-pill' />
                                        <button type="button" className="btn btn-light rounded-pill">Apply</button>
                                    </div>}
                                </div>
                                <div className='subtotal d-flex justify-content-between'>
                                    <h6>Subtotal</h6>
                                    <span>$ {cart.cartTotalMount}</span>
                                </div>
                                <div className='shipping-price d-flex justify-content-between'>
                                    <h6>Estimated Shipping & Handling</h6>
                                    <span>_</span>
                                </div>
                                <div className='tax d-flex justify-content-between'>
                                    <h6>Estimated Tax</h6>
                                    <span>_</span>
                                </div>
                                <hr />
                                <div className='Total d-flex justify-content-between'>
                                    <h6>Total</h6>
                                    <span>$ {cart.cartTotalMount}</span>
                                </div>
                                <hr />
                                <div className='checkout-dit d-flex justify-content-center flex-column gap-2 mt-4'>
                                    <button type="button" className="btn btn-dark rounded-pill px-5 text-center">Checkout</button>
                                    <button type="button" className="btn btn-light rounded-pill px-5 text-center text-success btn-details"><span className='text-primary'>pay</span>pal</button>
                                </div>

                            </div>
                        </div>
                    </div>


                )}

            </div>
        </div >

    )
}

export default Cart