import React, { Component } from 'react';
import { Movies } from './movies';
import axios from 'axios';
// class
class Read extends Component {
    // fired when constructor becomes visible
    componentDidMount() {
        // retrieve data from URL 
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        // execute call back function
        .then((response)=>{
            // updating state
            this.setState({mymovies: response.data.movies})
        })
        // if error occurs 
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []
    };
    render() {
        return (
            //component content
            <div>
                <h1>This is my read component</h1>
                {/* passing mymovies to object films */}
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
// mark for export
export default Read;