import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import './Products.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function ProdDit({ item }) {
    const { id, name, color, gender, images, final_price, reviews, rating } =
        item;
    useEffect(() => {
        setImg(images[0])
    }, [item])

    const [img, setImg] = useState(images[0])
    const orginalimage = () => { setImg(images[0]) }
    const hoverimage = () => { setImg(images[1]) }

    return (
        <div className='card-info col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <Card key={id} className='h-100'>
                <Link to={`/productview/${id}`} className='text-black' >
                    <div className='div-img'>
                        <Card.Img className='card-img' variant="top" src={img} onMouseEnter={hoverimage} onMouseLeave={orginalimage} />
                    </div>
                    <Card.Body className='card-body'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{gender}</Card.Text>
                        <Card.Text>
                            {color}
                        </Card.Text>
                        <Card.Text>$<span>{final_price}</span></Card.Text>
                        <Card.Text><AiFillStar className='text-warning' /><AiFillStar className='text-warning' /><AiFillStar className='text-warning' /><AiFillStar className='text-warning' />:{rating}<span className='ps-5'>{reviews} </span>Reviews</Card.Text>
                    </Card.Body>
                </Link>
            </Card>


        </div>
    )
}

export default ProdDit