import React, { Component } from 'react'
import './Card.css';

class Card extends Component { 

    renderShowData() {
        if (this.props.showData) {
            return (
                <div>
                    <h1>{this.props.showData.network.name}</h1>
                    <img className='ShowImg' src={this.props.showData.image.original}/>
                    <h2>{this.props.showData.name}</h2>
                    <ul>
                        {this.renderGenres()}
                    </ul>
                    <h4>Premiered: {this.props.showData.premiered}</h4>
                    <h5>{this.props.showData.summary}</h5>
                </div>
            );
        }
    }

    renderGenres() {
        return this.props.showData.genres.map((genre) => 
            <li>{genre}</li>
        );
    }
    
    render() {
        return (
            <div className="InfoCard">
                {this.renderShowData()}
            </div>
        );
    }
}

export default Card; 