import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import './Header.css'
import '../../App.css'



function Header({ togglefunc }) {
    const [mode, setMode] = useState(false);

    return (
        <>
            <Navbar className='header-info d-flex justify-content-end px-5 '>
                <div onClick={togglefunc}>
                    <div onClick={() => { setMode(!mode) }} className="dark-mode">{mode ? <BsFillSunFill /> : <MdDarkMode />}</div>
                </div>
            </Navbar>
        </>
    )
}

export default Header