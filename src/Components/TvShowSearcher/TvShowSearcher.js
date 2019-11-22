import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

class TvShowSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = { data: null }
    }

    getTvShow = (ShowName) => {
        const _this = this;

        axios ({
            method: 'GET',
            url: 'http://api.tvmaze.com/search/shows?q=' + ShowName
        })
        .then(function(response) {
            _this.setState({ data: response.data[0].show || null })
            console.log(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <Navbar getTvShowHandler = {this.getTvShow} />
                <Card showData={this.state.data} />
            </div>
        );
    }
}


export default TvShowSearcher;