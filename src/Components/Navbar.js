import React from "react";
import '../Navbar.css';
import logo from '../Logo.png';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <img className="logo" src={logo} alt="logo"></img>
            <div className="navbar-buttons">
                <button className="button">
                    Products
                </button>
                <button className="button">
                    About Us
                </button>
                <button className="button">
                    Home
                </button>
            </div>
        </div>
    );
}