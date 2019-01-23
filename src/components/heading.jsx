import React, { Component } from 'react';

class Heading extends Component {
    //render Heading which contains a message and the target rgb value
    render() {
        return (
            <div className="heading" style={{ backgroundColor: this.props.headingColor }}>
                <h1>
                    <span>{this.props.message}</span>
                    <br></br><br></br>
                    {this.props.colorValue}
                </h1>
            </div>
        );
    }
}

export default Heading;
