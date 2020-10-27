import React from 'react';

//Options
import Rock from '../options/Rock';
import Paper from '../options/Paper';
import Scissors from '../options/Scissors';

class Computer extends React.Component {
    
    render(){
        const options = [<Rock/>, <Paper/>, <Scissors/>]
        return(
            <div id="computer">
                {options[Math.floor(Math.random() * 3)]}
            </div>
        )
    }
}

export default Computer;