import React from 'react';

//css
import '../css/actionboard.css';
import '../css/options.css';

class Actionboard extends React.Component {
    render(){
        return(
            <div id="actionboard">
                <div className="option-button" id="option-button-rock" onClick={() => this.props.play(0)}>
                    <div className="option-rock"></div>
                </div>
                <div className="option-button" id="option-button-paper" onClick={() => this.props.play(1)}>
                    <div className="option-paper"></div>
                </div>
                <div className="option-button" id="option-button-scissors" onClick={() => this.props.play(2)}>
                    <div className="option-scissors"></div>
                </div>
            </div>
        )
    }
}

export default Actionboard;