import React, {useState} from 'react'
import {FaBars,FaTimes, FaShoppingCart} from 'react-icons/fa'
import {GiNightSky} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './Navbar.css';

export const Navbar = (props) => {
    // State area
    const [clicked,setClicked] = useState(false);
    // State area end
    const handleClick = () => {
        setClicked(!clicked)
    }
    const closeMobileMenu = () => {
        setClicked(false)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/NightScenz--Project-5" className="navbar-logo" onClick={closeMobileMenu}>
                        Night Scen-z<GiNightSky className="icon"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {
                            clicked? <FaTimes className="fa-times"/>: <FaBars className="fa-bars"/>
                        }
                    </div>
                    <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/NightScenz--Project-5" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li id="cart" className="nav-item">
                            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                                <FaShoppingCart />
                            </Link>
                            <div className="cart-quant" style={{color: "white"}}>
                                {props.cartQuantity}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
