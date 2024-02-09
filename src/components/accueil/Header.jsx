import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header bg-white">
            <div className="container px-lg-3">
                <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
                    <Link to="/" className="navbar-brand">
                        <span className="fw-bold text-uppercase text-dark">Boutique</span>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <div className="nav-link">
                                    
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                   
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                               
                                <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown">
                                    <Link to="/" className="dropdown-item border-0 transition-link">Homepage</Link>
                                    <Link to="/shop" className="dropdown-item border-0 transition-link">Category</Link>
                                    <Link to="/detail" className="dropdown-item border-0 transition-link">Product detail</Link>
                                    <Link to="/cart" className="dropdown-item border-0 transition-link">Shopping cart</Link>
                                    <Link to="/checkout" className="dropdown-item border-0 transition-link">Checkout</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                               
                            </li>
                            <li className="nav-item">
                               
                            </li>
                            <li className="nav-item">
                                <Link to="/SingIn" className="nav-link">
                                    <i className="fas fa-user me-1 text-gray fw-normal"></i>Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
