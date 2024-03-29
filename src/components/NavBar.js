import React, { useState } from 'react';
import "../styles/navbar.css"


const NavBar = () => {

    const logout = () => localStorage.setItem("token", "");

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="containerNavBar">
            <h1><a href="#/">e-commerce</a></h1>
            <nav className="navBar">
                <ul className="menuBar">
                    <li><a className="active" href="#/">Inicio</a></li>
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/Purchases">Purchases</a></li>
                    <li><a href="#/AddCart">Cart</a></li>
                    <li><a href="button" onClick={logout}>Log Out</a></li>
                </ul>
            </nav>
            <nav className= "containerNavBarResponsive">
                <button onClick={toggleMenu}>☰</button>
                {isOpen && (
                    <ul>
                        <li><a className="active" href="#/">Inicio</a></li>
                        <li><a href="#/login">Login</a></li>
                        <li><a href="#/Purchases">Purchases</a></li>
                        <li><a href="#/AddCart">Cart</a></li>
                        <li><a href="button" onClick={logout}>Log Out</a></li>

                    </ul>
                )}
            </nav>





        </div>
    );

};
export default NavBar;

