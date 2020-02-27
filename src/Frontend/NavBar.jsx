import './NavBarstyles.css'
import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom'


function NavBar() {
    return (
        <div className="main-nav-background">
            <div className="logo-wrapper">
                <img src={require('../assets/logo.png')} alt="logo" className="logo"/>
                <p className="logo-text">Expensify</p>
            </div>
            <Link to="/add" >
            <div className="add-button-wrapper">
                <img src={require('../assets/addicon.png')} alt="add-button" className="add-icon"/>
                <div className="add-button-text">Add new</div>
            </div>
            </Link>
            <div className="menu-wrapper">
                <div className="menu-item">
                    <img src={require('../assets/wallet.png')} alt="wallet-icon" className="menu-icons1"/>
                    <Link to="/" ><p className="menu-item-text">Expenses</p></Link>
                </div>
                <div className="menu-item">
                    <img src={require('../assets/chart.png')} alt="chart-icon" className="menu-icons2"/>
                    <Link to="/analytics" ><p className="menu-item-text">Analytics</p></Link>
                </div>
                <div className="menu-item">
                    <img src={require('../assets/wheel.png')} alt="wheel-icon" className="menu-icons3"/>
                    <Link to="/settings" ><p className="menu-item-text">Settings</p></Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;