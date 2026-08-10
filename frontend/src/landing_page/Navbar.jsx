import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
            <div className="container p-1">
                
                {/* Brand / Logo */}
                <Link className="navbar-brand" to="/">
                    <img 
                        src="/media/images/logo.svg" 
                        alt="Zerodha Logo" 
                        style={{ width: "25%" }} 
                    />
                </Link>

                {/* Mobile Hamburger Menu Toggle Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-collapse navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Products">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Support">Support</Link>
                        </li>
                            {/* Three Lines Font Awesome Icon */}
                        <li className="nav-item ms-4">
                            <a className="nav-link text-dark fs-5" href="#">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;