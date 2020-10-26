import React from 'react';

//Options
import Rock from '../options/Rock';
import Paper from '../options/Paper';
import Scissors from '../options/Scissors';

class Player extends React.Component {
    render(){
        return(
            <div id="player">
                <Rock/>
                <Paper/>
                <Scissors/>
            </div>
        )
    }
}

export default Player;