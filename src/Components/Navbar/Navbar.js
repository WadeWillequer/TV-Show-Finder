import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <h1>TV Show Finder</h1>
                    </a>
                    <a className="navbar-about" href="#"><h2>About</h2></a>
                    <button className='SearchButton'>Search</button>
                    <input className="SearchBar" type="search" placeholder="Search Show/Movie"aria-label="Search" />
                </nav>
            </div>
        );
    }

}

export default Navbar;