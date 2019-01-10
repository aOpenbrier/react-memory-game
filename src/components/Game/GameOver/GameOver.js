import React, { Component } from 'react'
const buttonStyles = {
    fontSize: '2rem',
    color: '#99aa66',
    textShadow: '1px 1px 1px rgba(0,0,0, 0.8)',
    position: 'fixed',
    top: '40%',
    left: '30%',
    width: '40%',
    height: '20%',
    backgroundColor: '#ecb651', 
    border: 'none', 
    borderRadius: '5px',

    boxShadow: '6px 6px 15px 5px rgba(0, 0, 0, 0.2)'
}
class GameOver extends Component {
    render() {
        return <>
            <h4 style={this.props.style}>GAME OVER</h4>
            <button style={buttonStyles} onClick={this.props.click}>Reset</button>
        </>
    }
}

export default GameOver