import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const styles = {
    container: {
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2vw'
    },
    text: {
        textAlign: 'center',
        marginTop: '0',
        fontWeight: 'bold',
        color: '#99aa66',
        textShadow: '1px 1px 1px rgba(0,0,0, 0.8)'
    },
    button: {
        fontWeight: 'bold',
        color: '#99aa66',
        textShadow: '1px 1px 1px rgba(0,0,0, 0.8)',
        backgroundColor: '#ecb651',
        border: 'none',
        width: '25vw',
        height: '10vw',
        borderRadius: '5px',
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.text}>Dinosaur Memory Game</h1>
                <h3 style={styles.text}>This game will challenge your memory. After choosing a dinosaur the game will shuffle and you have to choose again. Don't click the same dinosaur twice or the game is over.</h3>
                <Link to={process.env.PUBLIC_URL + '/game'}>
                    <button style={styles.button} >
                    New Game
                    </button>
                </Link>
            </div>
        )
    }
}

export default Home