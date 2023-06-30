import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><NavLink to="/">React Website</NavLink></h1>

                {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.jpg" alt="" className="img-fluid" /></a> */}

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink to="/" className="nav-link scrollto active">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link scrollto" >About</NavLink></li>
                        <li><NavLink to="/service" className="nav-link scrollto">Services</NavLink></li>
                        <li><NavLink to="/team" className="nav-link scrollto" >Team</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link scrollto" >Contact</NavLink></li>

                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header