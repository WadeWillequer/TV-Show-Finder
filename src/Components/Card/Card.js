import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="InfoCard">
                <img className='ShowImg' src="..."></img>
                <div className='cardBody'>
                    <h5 className='ShowName'>Show Name:</h5>
                <h1>Test</h1>
                    <ul className='ShowInfo'>
                        
                    </ul>
                </div>

            </div>
        );
    }
}

export default Card;