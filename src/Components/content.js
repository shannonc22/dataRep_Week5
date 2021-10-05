import React, { Component } from 'react';
//class
class Content extends Component
{
    render(){
        return(
             //component content
            <div>
                 <h1>Hello World</h1>
                 <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// mark for export
export default Content;
