import React from 'react';

//components
import Computer from './players/Computer';
import Player from './players/Player';

//css
import '../css/gameboard.css'

class Gameboard extends React.Component {
    render(){
        return(
            <div id="gameboard" >
                <Computer choice={this.props.computerChoice}/>
                <Player choice={this.props.playerChoice}/>
            </div>
        )
    }
}

export default Gameboard;