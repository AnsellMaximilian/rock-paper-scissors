import React from 'react';

//components
import Computer from './players/Computer';
import Player from './players/Player';

class Gameboard extends React.Component {
    render(){
        return(
            <div id="gameboard" >
                <Computer/>
                <Player/>
            </div>
        )
    }
}

export default Gameboard;