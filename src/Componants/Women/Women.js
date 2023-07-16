import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiFilter } from 'react-icons/hi'
import Collapse from 'react-bootstrap/Collapse';
import '../Products/Products.css'
import ProdDit from '../Products/ProdDit';
import { categoryfunc, genderfunc } from '../Products/ProductSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Women() {
    const [open1, setOpen1] = useState(false);
    const [open3, setOpen3] = useState(false);
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)


    useEffect(() => {
        dispatch(genderfunc("WOMEN"))
    }, [dispatch])

    const handlecategory = (category) => {
        dispatch(categoryfunc(category))
    }
    const handlegender = (gender) => {
        dispatch(genderfunc(gender))
    }



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-3 col-sm-12 filter'>
                    <h1><HiFilter />Filter</h1>
                    <div className='item-div'><button className='button-details' onClick={() => setOpen1(!open1)}
                        aria-controls="example-collapse-1"
                        aria-expanded={open1}>Category<span >{!open1 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></button></div>
                    <Collapse in={open1}>
                        <div id="example-collapse-1" className='cat-info'>
                            <button className='check-button' onClick={() => handlecategory("clothes")}>Clothes</button>
                            <button className='check-button' onClick={() => handlecategory("shoes")}>shoes</button>
                        </div>
                    </Collapse>

                    <div className='item-div'><button className='button-details' onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-3"
                        aria-expanded={open3}>Gender<span>{!open3 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></button></div>
                    <Collapse in={open3}>
                        <div id="example-collapse-3" className='cat-info'>
                            <button className='check-button' onClick={() => handlegender("WOMEN")}>WOMEN</button>
                            <button className='check-button' onClick={() => handlegender("MEN")}>MEN</button>


                        </div>

                    </Collapse>

                </div>
                <div className='col-lg-10 col-md-9'>
                    <div className='row'>
                        {product.data?.map((item) => (
                            <ProdDit item={item} />
                        ))}
                    </div>
                </div>


            </div >
        </div >
    )
}

export default Women