import React from 'react';

//Options
import Rock from '../options/Rock';
import Paper from '../options/Paper';
import Scissors from '../options/Scissors';

class Computer extends React.Component {
    render(){
        return(
            <div id="computer">
                <Rock/>
                <Paper/>
                <Scissors/>
            </div>
        )
    }
}

export default Computer;