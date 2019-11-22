import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state= { textFieldValue: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue:
        event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.getTvShowHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });
    }




    render() {

        // this.getTvShow('House M.D.');

        return (
            <div>
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <h1>TV Show Finder</h1>
                    </a>
                    <a className="navbar-about" href="#"><h2>About</h2></a>
                    <button className='SearchButton' onClick={this.handleSubmit}>Search</button>
                    <form onSubmit={this.handleSubmit} className='Form'>
                    <input className="SearchBar" type="text" value = {this.state.textFieldValue} onChange = {this.handleChange} placeholder="Search Show" />
                    </form>

                </nav>      
                     
            </div>
        );
    }

}

export default Navbar;
