import React from 'react'
import { useState } from 'react'
import Topprod from '../gg.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topproddit from './Topproddit';
import Slider from "react-slick";

function Topproduct(props) {
    const { className, style, onClick } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    const [prod, setProd] = useState(Topprod)

    return (
        <div className='Topproduct px-5 mt-5 ' >
            <h1>TOP ITEMS FOR YOU</h1>
            <div className='row'>
                < Slider {...settings}>
                    {
                        prod.map((item) => {
                            return (<Topproddit item={item} />)
                        })
                    }

                </ Slider>


            </div >


        </div >
    )
}

export default Topproduct