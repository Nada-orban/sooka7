import React from 'react'
import './Footer.css'

import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si'


function Footer() {
    return (

        <>
            <footer className="footer-info container-fluid  text-center text-lg-start bg-black text-white  ">
                <div className=" p-4 pb-0 container">
                    <div className="row">
                        <div className='col-3 '>
                            <h1>Product</h1>
                            <ul className='list-unstyled'>
                                <li><a href='http://localhost:3000/men'>men collections</a></li>
                                <li><a href='http://localhost:3000/women'>women collections</a></li>
                                <li><a href='http://localhost:3000/shoes'>shoes collections</a></li>
                                <li><a href='http://localhost:3000/products'>clothes collections</a></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h1>Support</h1>
                            <ul className='list-unstyled'>
                                <li>Help</li>
                                <li>customer service</li>
                                <li>shipping</li>
                                <li>Order tracker</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                        <div className='col-3 d-md-block'>
                            <h1>Company info</h1>
                            <ul className='list-unstyled'>
                                <li>About Us</li>
                                <li>Entity details</li>
                                <li>careers</li>
                                <li>company Apps</li>
                            </ul>
                        </div>
                        <div className='col-3  '>
                            <AiOutlineInstagram className='mx-2' />
                            <SiGmail className='mx-2' />
                            <BsFacebook className='mx-2' />
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer