import React from 'react';

//Options
import Rock from '../options/Rock';
import Paper from '../options/Paper';
import Scissors from '../options/Scissors';

class Player extends React.Component {
    render(){
        const options = [<Rock/>, <Paper/>, <Scissors/>]
        return(
            <div id="player">
                {options[Math.floor(Math.random() * 3)]}
            </div>
        )
    }
}

export default Player;