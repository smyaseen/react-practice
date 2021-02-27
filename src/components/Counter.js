import React, {Component} from 'react';


const heading = {
    color: "yellow"
}

const msg = {
    color: "orange"
}

class Counter extends Component {
   
    constructor() {
        super();
        this.state = {
            count: 1,
            message: ""
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        },
        () => {
                if (this.state.count % 10 === 0)
                    this.setState({
                        message: "CONGRATS! you reached " + this.state.count + "!"
                    });
        });
    }
   
    render() {
        return (
            <div>
                <h1 style={heading}>{this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>COUNT</button> 
                <h1 style={msg}>{this.state.message}</h1>
            </div>
        )}
}

export default Counter;