import './App.css';
import React from 'react';

//components
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Scoreboard />
        <Gameboard />
      </div>
    );
  }
  
}

export default App;
