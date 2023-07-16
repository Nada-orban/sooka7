import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs'
import './Wishlist.css'
import { remove, quantity } from './Wishslice'
import { addtocart } from '../Cart/Cartslice'
import { FcApproval } from 'react-icons/fc'


function Wishlist() {

    const wish = useSelector(state => state.wish)
    const dispatch = useDispatch()
    const handleremove = (item) => {
        dispatch(remove(item));
    }
    const handlecart = (item) => {
        dispatch(addtocart(item))


    }
    useEffect(() => {
        dispatch(quantity());

    }, [wish, dispatch]);


    return (
        <div className='wishlist mb-5'>
            <div className='container'>
                <h3>Favorites</h3>
                {wish.wishItems.length === 0 ? (<div className='empty wish'><p>Items added to your Favorites will be saved here.</p></div>) : (
                    <div className='wish-details'>
                        <div className='row mt-5 '>
                            {wish.wishItems?.map((item) => (
                                <div className='col-md-4 col-sm-6 mb-3  ' key={item.id}>
                                    <Card style={{ width: '18rem' }} className="h-100 position-relative">
                                        <Card.Img variant="top" src={item.images[0]} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.gender}
                                            </Card.Text>
                                            <Card.Text className='mb-5'>$ {item.final_price}</Card.Text>
                                            <Card.Text className=' d-flex gap-5 align-items-center position-absolute bottom-0 mt-3 mb-3'>
                                                <button type="button" className="btn btn-outline-secondary rounded-pill " onClick={() => handlecart(item)} >Add To Cart</button>
                                                <div className='trash-icon ' onClick={() => handleremove(item)}><BsTrash /></div>

                                            </Card.Text>



                                        </Card.Body>
                                    </Card>

                                </div>
                            ))}

                        </div>

                    </div>


                )}


            </div>
        </div>
    )
}

export default Wishlist