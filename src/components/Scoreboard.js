import React from 'react';

import '../css/scoreboard.css';

class Scoreboard extends React.Component {
    render(){
        return(
            <div id="scoreboard">
                <div id="computer-score">
                    <span id="computer-score-text">{this.props.computerScore}</span>
                </div>

                <div id="player-score">
                    <span id="player-score-text">{this.props.playerScore}</span>
                </div>
            </div>
        )
    }
}

export default Scoreboard;