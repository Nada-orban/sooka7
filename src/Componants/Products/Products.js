import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiFilter } from 'react-icons/hi'
import Collapse from 'react-bootstrap/Collapse';
import './Products.css'
import ProdDit from './ProdDit';
import Allproducts from '../../db.json';

function Products() {
    const [open1, setOpen1] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [data, setData] = useState(Allproducts);

    const catfunc = (catitem) => {
        const result = Allproducts.filter((curr) => {
            return curr.category === catitem;
        });
        setData(result)
    }
    // const colorfunc = (colitem) => {
    //     console.log(data)
    //     const colorres = Allproducts.filter((curr) => {
    //         return curr.color === colitem;
    //     });
    //     setData(colorres);
    // }
    const genderfunc = (genitem) => {

        const genres = Allproducts.filter((curr) => {
            return curr.gender === genitem;
        });
        setData(genres);
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
                            <button className='check-button' onClick={() => catfunc("clothes")}>Clothes</button>
                            <button className='check-button' onClick={() => catfunc("shoes")}>shoes</button>
                        </div>
                    </Collapse>
                    {/* <div className='item-div'><button className='button-details' onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-2"
                        aria-expanded={open2}>Color<span>{!open2 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></button></div>
                    <Collapse in={open2}>
                        <div id="example-collapse-2" className='cat-info'>
                            <button className='check-button' >black</button>
                            <button className='check-button' >red</button>
                            <button className='check-button' >white</button>
                            <button className='check-button' >blue</button>

                        </div>
                    </Collapse> */}
                    <div className='item-div'><button className='button-details' onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-3"
                        aria-expanded={open3}>Gender<span>{!open3 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></button></div>
                    <Collapse in={open3}>
                        <div id="example-collapse-3" className='cat-info'>
                            <button className='check-button' onClick={() => genderfunc("WOMEN")}>WOMEN</button>
                            <button className='check-button' onClick={() => genderfunc("MEN")}>MEN</button>


                        </div>

                    </Collapse>
                    {/* <div className='item-div'><button className='button-details' onClick={() => setOpen4(!open4)}
                        aria-controls="example-collapse-4"
                        aria-expanded={open4}>Rating<span>{!open4 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></button></div>
                    <Collapse in={open4}>
                        <div id="example-collapse-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Ascending
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Descending
                                </label>
                            </div>
                        </div>
                    </Collapse> */}
                </div>
                <div className='col-lg-10 col-md-9 col-sm-12'>
                    <div className='row'>
                        {data.map((item) => {
                            return (<ProdDit item={item} />)
                        })}
                    </div>
                </div>


            </div >
        </div >
    )
}



export default Products