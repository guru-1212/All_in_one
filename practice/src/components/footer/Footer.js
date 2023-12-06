import React from "react";
import "../footer/Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: info@example.com</p>
                            <p>Phone: +1234567890</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Services</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a><i className="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer;