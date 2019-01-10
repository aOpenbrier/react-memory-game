import React, { Component } from 'react'

class Info extends Component {
    render() {
        return <div style={this.props.style}>
            Highest Score: {this.props.best} Count: {this.props.clicks}
        </div>
    }
}

export default Info