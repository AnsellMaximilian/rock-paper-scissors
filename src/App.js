import './App.css';
import React from 'react';

//components
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import Actionboard from './components/Actionboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      computerScore: 0,
      playerScore: 0,
      
      computerChoice: 0,
      playerChoice: 0,

      winner: ''
    }
  }

  play = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * 3);
    let winner;
    // Check the winner
    if(playerChoice === 0){
      if(computerChoice === 0){
        
      }else if(computerChoice === 1){
        winner = 'computer';
      }else if(computerChoice === 2){
        winner = 'player';
      }
    }else if(playerChoice === 1){
      if(computerChoice === 0){
        winner = 'player';
      }else if(computerChoice === 1){
  
      }else if(computerChoice === 2){
        winner = 'computer';
      }
    }else if(playerChoice === 2){
      if(computerChoice === 0){
        winner = 'computer';
      }else if(computerChoice === 1){
        winner = 'player';
      }else if(computerChoice === 2){
  
      }
    }
    this.setState(state => ({
      playerChoice,
      computerChoice,
    }), () => {
      //Add animation for playing a round
      document.querySelector('#computer > .game-option').style.animation = 'play-computer 1.5s';
      document.querySelector('#player > .game-option').style.animation = 'play-player 1.5s';
      // Remove buttons so player has to wait for animation
      document.querySelectorAll('.option-button').forEach(element => {
        element.style.visibility = 'hidden';
      })
      // Remove play result
      document.querySelector('#play-result').style.display = "none";
      setTimeout(() => {
        // Remove animation for playing a round
        document.querySelector('#computer > .game-option').style.animation = 'none';
        document.querySelector('#player > .game-option').style.animation = 'none';
        // Reappend buttons
        document.querySelectorAll('.option-button').forEach(element => {
          element.style.visibility = 'visible';
        })
        // Show play result
        document.querySelector('#play-result').style.display = "block";
        //Update score after animation
        this.setState(state => ({
          computerScore: winner === 'computer' ? (state.computerScore + 1) : state.computerScore,
          playerScore:  winner === 'player' ? (state.playerScore + 1) : state.playerScore,
          winner
        }));
      }, 1500)
    })

  }

  render(){
    return (
      <div className="App">
        <Scoreboard computerScore={this.state.computerScore} playerScore={this.state.playerScore}/>
        <Gameboard computerChoice={this.state.computerChoice} playerChoice={this.state.playerChoice} winner={this.state.winner}/>
        <Actionboard play={this.play}/>
      </div>
    );
  }
  
}

export default App;
