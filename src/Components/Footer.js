import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">

            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Use these newsletter signup examples to get people excited to receive your emails. With the right email signup, getting subscribers has never been easier</p>
                            <form >
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3></h3>
                            <p>
                                A108  Street <br />
                                Bhimtal, NY 535022<br />
                                India <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/service">Services</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/contact">Contact</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/team">Our Team</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/service">Services</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/contact">Contact</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/team">Our Team</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Social networks are websites and apps that allow users and organizations to connect, communicate, share information and form relationships</p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">

                <div className="credits">


                </div>
            </div>
        </footer>
    )
}

export default Footer