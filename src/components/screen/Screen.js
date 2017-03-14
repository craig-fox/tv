/**
 * Created by CraigFox on 10/03/17.
 */
import React, { Component } from 'react';
import Schedule from './Schedule';
import axios from 'axios';

import './Screen.css';

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {shows: []};
        this.getData = this.getData.bind(this);

    }

    getData(){
        let _this = this;

        axios.get(this.props.url)
        .then(function (response) {
            console.log(response);
            _this.setState({shows: response.data.shows});
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div className="Screen">
                <div className="Screen-header">
                    <h1>See It All On React TV!</h1>
                </div>
                <Schedule shows={this.state.shows} />
            </div>
        );
    }
}

Screen.defaultProps = {
    url: '/shows.json'
}

export default Screen;