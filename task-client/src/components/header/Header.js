import React from 'react';
import { Link } from 'react-router-dom';
import imageHeader from "../../images/imageHeader.png"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex justify-content-evenly" id="navbarTogglerDemo03">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about-us" className="nav-link">ABOUT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services" className="nav-link">SERVICES</Link>
                            </li>
                            <li className="nav-item nav__img">
                                <Link to="/" className="navbar-brand">
                                    <img src={imageHeader} alt="image" style={{ width: "65px", height: "75px" }} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="portfolio" className="nav-link">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact-us" className="nav-link">CONTACT US</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="support" className="nav-link" tabIndex="-1" aria-disabled="true">SUPPORT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;