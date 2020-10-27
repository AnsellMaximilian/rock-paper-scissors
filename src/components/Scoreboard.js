import React from 'react';

import '../css/scoreboard.css';

class Scoreboard extends React.Component {
    render(){
        return(
            <div id="scoreboard">
                <div id="computer-score">
                    2
                </div>

                <div id="player-score">
                    4
                </div>
            </div>
        )
    }
}

export default Scoreboard;