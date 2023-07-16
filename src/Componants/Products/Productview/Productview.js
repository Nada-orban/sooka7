import React from 'react'
import './Productview.css'
import Allproducts from '../../../db.json'
import { useParams } from 'react-router-dom'
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addtocart } from '../../Cart/Cartslice'
import { addtowishlist } from '../../Wishlist/Wishslice'
// import { useForm } from "react-hook-form";





function Productview() {
    // const { register, handleSubmit } = useForm({ "radio": '' });
    const [data, setData] = useState("");
    const [size, setSize] = useState(null);



    const dispatch = useDispatch()
    const { id } = useParams();
    const item = Allproducts.find((product) => product.id == id);
    const { name, color, gender, images, final_price, reviews, rating, sizes } =
        item;
    console.log(size)

    const [imag, setImag] = useState(images[0])
    const handleimag = (number) => {
        setImag(images[number])
    }

    // const handlecart = (item) => {
    //     dispatch(addtocart(item))


    // }
    const handlecart = () => {
        let payload = { ...item, size };
        dispatch(addtocart(payload))

    }






    const handlewishList = () => {
        dispatch(addtowishlist(item))

    }









    return (
        <div className='productview'>

            <div className="product">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={imag} alt='' className='img-fluid' /> </div>
                            <div className="thumbnail text-center  ">
                                <img className='image-icon mx-2' src={images[1]} onClick={() => handleimag(1)} width="150" alt='' />
                                <img className='image-icon mx-2 ' src={images[2]} onClick={() => handleimag(2)} width="150" alt='' />
                                <img className='image-icon mx-2' src={images[3]} onClick={() => handleimag(3)} width="150" alt='' />
                                <img className='image-icon mx-2 ' src={images[4]} onClick={() => handleimag(4)} width="150" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product p-4">
                            <div className="mt-4 mb-3 d-flex justify-content-between fs-6">
                                <span className="text-uppercase text-muted brand">{gender}</span>
                                <span><AiFillStar className='text-dark' />
                                    <AiFillStar className='text-dark' />
                                    <AiFillStar className='text-dark' />
                                    <AiFillStar className='text-dark' />:{rating}
                                </span>
                            </div>
                            <div>
                                <h5 className="text-uppercase fs-3">{name}</h5>
                                <div className="price d-flex flex-row align-items-center">$ {final_price}</div>
                            </div>
                            <form >
                                <div className="sizes mt-5">
                                    <h6 className="text-uppercase">Size:</h6>
                                    {sizes.map((size) => (
                                        <label className="radio mx-2 ">
                                            <input type="radio" name="size" value={size} onClick={() => setSize(size)} /> <span>{size}</span>
                                        </label>

                                    ))}

                                    {/* <label className="radio mx-2">
                                        <input type="radio" name="size" value="M" /> <span>M</span>
                                    </label>
                                    <label className="radio mx-2 ">
                                        <input type="radio" name="size" value="L"  /> <span>L</span>
                                    </label> */}
                                    {/* <label className="radio mx-2">
                                        <input type="radio" name="size" value="XL" /> <span>XL</span>
                                    </label>
                                    <label className="radio mx-2">
                                        <input type="radio" name="size" value="XXL" /> <span>XXL</span>
                                    </label> */}
                                </div>
                                <div className="cart mt-4 align-items-start d-flex  flex-column">
                                    <button type='submit' className="btn btn-dark text-uppercase mb-2 px-5" onClick={handlecart}>Add to cart
                                    </button>
                                    <button type="button" className="btn-fav btn btn-light mb-2 px-5" onClick={() => handlewishList(item)}>Favorite <BsSuitHeart /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div >
    )
}

export default Productview