import React, { Component } from 'react'
import Dinosaurs from './dinosaurs.json'
import randomize from 'array-random'
import Info from './Info'
import GameOver from './GameOver'

const styles = {
    text: {
        color: '#99aa66',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: '.5rem',
        textShadow: '1px 1px 1px rgba(0,0,0, 0.8)'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#ecb651',
        width: '23%',
        height: '17vh',
        margin: '1%',
        borderRadius: '5px',
        padding: '2px',
        boxSizing: 'border-box'
    },
    img: {
        objectFit: 'contain',
        height: 'inherit',
        width: 'inherit'
    }
}

class Game extends Component {
    state = {
        dinosaurs: [],
        clicked: [],
        numClicks: 0,
        numBest: 0,
        isGameOver: false
    }

    componentWillMount = () => {
        this.setState({ dinosaurs: randomize(Dinosaurs) })
    }

    handleReset = () => {
        this.setState({
            isGameOver: false,
            numClicks: 0,
            clicked: []
        })

    }
    handleClick = (dinoName) => {
        if (!this.state.isGameOver) {
            if (this.state.clicked.indexOf(dinoName) === -1) {
                let clickedArr = this.state.clicked
                let num = this.state.numClicks
                clickedArr.push(dinoName)
                num++
                this.setState({ dinosaurs: randomize(Dinosaurs), clicked: clickedArr, numClicks: num })
                console.log(clickedArr)
            }
            else {
                this.setState({ isGameOver: true })
                if (this.state.numClicks > this.state.numBest) {
                    this.setState({ numBest: this.state.numClicks })
                }
            }
        }
    }
    render() {
        return (
            <>
                <h1 style={styles.text}> Dinosaur Memory Game </h1>
                {this.state.isGameOver ? <GameOver style={styles.text} click={this.handleReset} /> : <h4 style={styles.text}> Don't choose the same one twice!</h4>}
                <Info style={styles.text} clicks={this.state.numClicks} best={this.state.numBest} />
                <div style={styles.container}>
                    {this.state.dinosaurs.map((dinosaur, index) => {
                        return <div style={{
                            background: `#ecb651 url('./assets/images/${dinosaur.image}') bottom center / contain no-repeat`,
                            overflow: 'hidden',
                            width: '21%',
                            height: '17vh',
                            margin: '1%',
                            borderRadius: '5px',
                            padding: '2px',
                        }} key={index} onClick={() => this.handleClick(dinosaur.name)}>
                            <p style={styles.text}>{dinosaur.name}</p>
                        </div>
                    })}
                </div>
            </>
        )
    }
}

export default Game