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
      computerScore: winner === 'computer' ? (state.computerScore + 1) : state.computerScore,
      playerScore:  winner === 'player' ? (state.playerScore + 1) : state.playerScore
    }))
  }

  render(){
    return (
      <div className="App">
        <Scoreboard computerScore={this.state.computerScore} playerScore={this.state.playerScore}/>
        <Gameboard computerChoice={this.state.computerChoice} playerChoice={this.state.playerChoice}/>
        <Actionboard play={this.play}/>
      </div>
    );
  }
  
}

export default App;
