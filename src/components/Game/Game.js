import React, { Component } from 'react'
import Dinosaurs from './dinosaurs.json'
import randomize from 'array-random'

const styles = {
    text: {
        color: '#99aa66',
        textAlign: 'center',
        marginTop: '0',
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
        maxHeight: '17vh',
        margin: '1%', 
        borderRadius: '2px',
        padding: '2px',
        boxSizing: 'border-box' 
    },
    img: { 
        maxWidth: '100%', 
        maxHeight: '80%', 
        boxSizing: 'border-box' 
    }
}

class Game extends Component {
    state = {
        dinosaurs: [],
        clicked: [],
        numClicks: 0,
        isGameOver: false
    }

    componentWillMount = () => {
       this.setState({dinosaurs: randomize(Dinosaurs)})
    }

    handleClick = (dinoName) => {
        if (this.state.clicked.indexOf(dinoName) === -1) {
            let clickedArr = this.state.clicked
            let num = this.state.numClicks
            clickedArr.push(dinoName)
            num++
            this.setState({ dinosaurs: randomize(Dinosaurs), clicked: clickedArr, numClicks: num })
            console.log(clickedArr)
        }
        else {
            this.setState({isGameOver: true})
        }
    }
    render(){
        return(
            <>
           <h1 style={styles.text}> Dinosaur Memory Game </h1>
           <h4 style={styles.text}> Click on each dinosaur without clicking on the same one twice!</h4>
           <div style={styles.container}>
                    {this.state.dinosaurs.map((dinosaur, index) => <div style={styles.card} key={index} onClick={() => this.handleClick(dinosaur.name)}>
                    <img src={`./assets/images/${dinosaur.image}`} alt={dinosaur.name} style={styles.img} />
                    <p style={styles.text}>{dinosaur.name}</p> 
                    </div>
        )}
        </div>
        </>
        )
    }
}

export default Game