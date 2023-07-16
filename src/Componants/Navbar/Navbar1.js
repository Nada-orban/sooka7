import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Home from '../Home/Home'
// import Products from '../Products/Products'
// import Men from '../men/Men'
// import Women from '../Women/Women'
// import Shoes from '../Shoes/Shoes'
import Offcanvas from 'react-bootstrap/Offcanvas';

import { BsSuitHeart, BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai'
import './Navbar1.css'
// import Acountitem from '../Acount/Acountitem';
// import Cart from '../Cart/Cart'
import { useState } from 'react';
import logo from '../images/logo-no-background.png'
// import { useSelector } from 'react-redux';
// import Store from '../Cart/Store';



function Navbar1() {
    // const cart = useSelector(state => state.cart)
    // const wish = useSelector(state => state.wish)
    const [close, setClose] = useState(false)
    const closefunc = () => { setClose(false) }

    return (
        <div>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} sticky="top" className=" navbar z-1">
                    <Container fluid className='px-5'>
                        <Navbar.Brand as={Link} to={"/"} ><img className='logo-img' src={logo} alt='' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggle-icon' />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className={` p-3${close ? "menu-list" : "menu-close"}`}
                        >
                            <Offcanvas.Header closeButton className='header-menu'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='menu'>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>


                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 " >
                                    <Nav.Link className='nav-link fw-bold  active' as={Link} to={"/"} onClick={closefunc}>Home</Nav.Link>
                                    <Nav.Link className='nav-link  fw-bold' as={Link} to={"/products"} onClick={closefunc}>All Products</Nav.Link>
                                    <Nav.Link className='nav-link  fw-bold' as={Link} to={"/men"} onClick={closefunc}>Men</Nav.Link>
                                    <Nav.Link className='nav-link  fw-bold' as={Link} to={"/women"} onClick={closefunc}>Women</Nav.Link>
                                    <Nav.Link className='nav-link fw-bold' as={Link} to={"/shoes"} onClick={closefunc}>Shoes</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                        <div className='right-items d-flex justify-content-end gap-4 fs-4 '>
                            <div className='acount-item'>
                                <Nav.Link as={Link} to={"/acount-item"}>
                                    <AiOutlineUser />
                                </Nav.Link>

                            </div>
                            {/* <div className='favorite-item'>
                                <Nav.Link as={Link} to={"/favorite"}>
                                    <BsSuitHeart />
                                </Nav.Link>
                                <p className='favorite-number'>{wish.wishTotalQuantity}</p>
                            </div>
                            <div className='cart'>
                                <Nav.Link as={Link} to={"/cart"}>
                                    <BsCart />
                                </Nav.Link>
                                <p className='cart-number'>{cart.cartTotalQuantity}</p>
                            </div> */}


                        </div>
                    </Container>
                </Navbar>
            ))}

        </div>
    )
}

export default Navbar1