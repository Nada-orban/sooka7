import './Home.css'
import React, { useState } from 'react'
// import Topproduct from './Topproduct'
import Card from 'react-bootstrap/Card';
// import womenphoto from '../images/beautiful-hip-hop-dancer-wearing-hooded-shirt.jpg'
// import menphoto from '../images/portrait-handsome-happy-sportsman-blue-shirt-holds-water-apple-white-wall.jpg'
// import shosephoto from '../images/white-high-top-sneakers-unisex-footwear-fashion.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";







function Home() {
    const [close, setClose] = useState("false")

    return (
        <div className='home-info'>
            {close && <Navbar bg="primary" expand="lg" variant="light" className='quick-bar '>
                <Container>
                    <p className='text-white  pt-lg-3' >END OF YEAR SALE:UP TO 60% OFF <FaLongArrowAltRight /> <Link className="text-decoration-underline" to="/products">SHOP NOW</Link></p>
                    <div className='close-icon text-white' role="button" onClick={() => setClose(!close)}><AiOutlineClose /></div>
                </Container>
            </Navbar>}

            <div className='landing px-5 position-relative '>
                <div className='landing-info d-flex  flex-column  justify-content-start text-start text-white position-absolute'>
                    <h1>NEW YEAR, NEW GEAR</h1>
                    <p>Get back to fitness with fresh gear that<br /> powers you through every workout.</p>
                    <div className='category-buttons d-flex flex-column gap-2'>
                        <button type="button" className=" main-btn btn btn-light text-start px-3" ><Link className='text-black' as={Link} to={"/men"} >SHOP MEN </Link> <FaLongArrowAltRight /></button>
                        <button type="button" className=" main-btn btn btn-light text-start px-3" ><Link className='text-black' as={Link} to={"/women"} >SHOP WOMEN  </Link><FaLongArrowAltRight /></button>
                        <button type="button" className=" main-btn btn btn-light text-start px-3 " ><Link className='text-black' as={Link} to={"/shoes"} >SHOP SHOES</Link> <FaLongArrowAltRight /></button>
                    </div>
                </div>

            </div>
            {/* <Topproduct /> */}
            {/* <div className='category-photo px-5 row my-5 h-100'>
                    <div className='col-lg-4 col-sm-12'>
                        <div className='women-category'>
                            <Card className="card-info bg-light text-dark">
                                <Card.Img className="card-img img-fluid" src={womenphoto} alt="" />
                                <Card.ImgOverlay>
                                    <Card.Title>WOMEN</Card.Title>
                                    <button type="button" className="btn btn-dark rounded-pill">Shop</button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 '>
                        <div className='men-category'>
                            <Card className="card-info bg-light text-dark position-relative">
                                <Card.Img className="card-img img-fluid" src={menphoto} alt="" />
                                <Card.ImgOverlay className='position-absolute bottom-0 start-0'>
                                    <Card.Title>MEN</Card.Title>
                                    <button type="button" className="btn btn-dark rounded-pill">Shop</button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 '>
                        <div className='shose-category'>
                            <Card className="card-info bg-light text-dark">
                                <Card.Img className="card-img img-fluid" src={shosephoto} alt="" />
                                <Card.ImgOverlay>
                                    <Card.Title>SHOSE</Card.Title>
                                    <button type="button" className="btn btn-dark rounded-pill">Shop</button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div> */}

            <div className='member px-5  mt-5'>
                <h4>Sooka Membership</h4>
                <div className='member-info bg-black text-white p-5 mt-2'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <h1 className='member-font fw-bolder'>BECOME A MEMBER</h1>
                            <p>Sign up for free.Join the community.</p>
                            <button type="button" className="btn btn-light rounded-pill p-2 px-4">Join Us</button>
                        </div>
                        <div className='col-md-6 col-sm-12'></div>
                    </div>

                </div>
            </div>
            <div className='feedback-part  text-dark mt-5'>
                <div className='feedback-text d-flex  flex-column  justify-content-center text-center align-items-center p-5'>
                    <h3>We’d love to hear what you think!</h3>
                    <button type="button" className="btn btn-outline-dark w-25 rounded-pill">Give Feedback</button>

                </div>


            </div>




        </div>

    )
}

export default Home