import React from 'react';

//components
import Computer from './players/Computer';
import Player from './players/Player';

//css
import '../css/gameboard.css'

class Gameboard extends React.Component {
    render(){
        const choiceStrings = ['Rock', 'Paper', 'Scissors'];
        let statusMsg = '';
        let resultMsg = '';
        if(this.props.winner === 'player'){
            statusMsg = 'You Win!';
            resultMsg = `${choiceStrings[this.props.playerChoice]} Beats ${choiceStrings[this.props.computerChoice]}`;
        }else if(this.props.winner === 'computer'){
            statusMsg = 'You Lose!';
            resultMsg = `${choiceStrings[this.props.computerChoice]} Beats ${choiceStrings[this.props.playerChoice]}`
        }else{
            statusMsg = "Draw!";
        }

        return(
            <div id="gameboard" >
                <Computer choice={this.props.computerChoice} playing={this.props.playing}/>
                <div id="play-result">
                    <span id="play-result-status">
                        {statusMsg}
                    </span>
                    <span id="play-result-result">
                        {resultMsg}  
                    </span>
                </div>
                <Player choice={this.props.playerChoice}/>
            </div>
        )
    }
}

export default Gameboard;