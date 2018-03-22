import React, {Component} from 'react';
import './Navbar.css';
import {
    Link
} from 'react-router-dom'

class NavComponent extends Component {
    burgerToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }

    render() {
        return (
                <nav>
                    <div className="navWide">
                        <div className="wideDiv">
                            <Link className="navbar-item" to="/">HOME</Link>
                            <Link className="navbar-item" to="/about">ABOUT</Link>
                            <Link className="navbar-item" to="/contact">CONTACT</Link>
                            <Link className="navbar-home" to="/">ARTPIECE.IO</Link>
                            <br/>
                        </div>
                    </div>
                    <div className="navNarrow">
                        <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                        <Link className="navbar-home" to="/">ARTPIECE.IO</Link>
                        <br/>
                        <div className="narrowLinks">
                            <Link className="navbar-item" to="/" onClick={this.burgerToggle}>HOME</Link>
                            <Link className="navbar-item" to="/about" onClick={this.burgerToggle}>ABOUT</Link>
                            <Link className="navbar-item" to="/contact" onClick={this.burgerToggle}>CONTACT</Link>
                        </div>
                    </div>
                </nav>
        );
    }
};

export default NavComponent;