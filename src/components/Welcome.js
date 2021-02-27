import React, {Component} from 'react';


const heading = {
    color: "red"
}

class Welcome extends Component {
    render() {
        return <h1 style={heading}>Welcome {this.props.name}</h1> 
    }
}

export default Welcome;