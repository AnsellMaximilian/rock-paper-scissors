import './App.css';
import React from 'react';

//components
import Gameboard from './components/Gameboard';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Gameboard />
      </div>
    );
  }
  
}

export default App;
