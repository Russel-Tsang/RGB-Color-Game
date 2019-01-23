import React, { Component } from 'react';

class Stripe extends Component {
    //render div that contains easy and hard buttons
    render() {
        return (
            <div className="stripe">
                <button
                    onClick={this.props.easy}
                >
                    Easy
                </button>
                <button
                    onClick={this.props.hard}
                >
                    Hard
                </button>
            </div>
        );
    }
}

export default Stripe;
