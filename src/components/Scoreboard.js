import React from 'react';

import '../css/scoreboard.css';

class Scoreboard extends React.Component {
    render(){
        return(
            <div id="scoreboard">
                <div id="computer-score">
                    <div id="computer-icon"></div>
                    <span id="computer-score-text">{this.props.computerScore}</span>
                </div>

                <div id="player-score">
                    <span id="player-score-text">{this.props.playerScore}</span>
                    <div id="player-icon"></div>
                </div>
            </div>
        )
    }
}

export default Scoreboard;