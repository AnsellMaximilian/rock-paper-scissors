import React from 'react';

//components
import Computer from './players/Computer';
import Player from './players/Player';

//css
import '../css/gameboard.css'

class Gameboard extends React.Component {
    render(){
        // const choiceStrings = ['Rock', 'Paper', 'Scissors'];
        // let winMessage = '';
        return(
            <div id="gameboard" >
                <Computer choice={this.props.computerChoice} playing={this.props.playing}/>
                <div id="play-result">{}</div>
                <Player choice={this.props.playerChoice}/>
            </div>
        )
    }
}

export default Gameboard;