import React from 'react';
import "../styles/navbar.css";



const NavBar = () => {

    const logout = () => localStorage.setItem("token", "");


    return (
        <div className="containerNavBar">
            <h1>e-commerce</h1>
            <nav className="navBar">
                <ul className="menuBar">
                    <li><a className="active" href="#/">Inicio</a></li>
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/Purchases">Purchases</a></li>
                    <li><a href="#/AddCart">Cart</a></li>
                    <li><a href="button" onClick={logout}>Log Out</a></li>
                </ul>
            </nav>



        </div>
    );
};

export default NavBar;

