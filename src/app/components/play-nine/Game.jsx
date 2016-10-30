import React, {Component} from 'react';

//Components
import Star from './Star';
import Button from './Button';
import Answer from './Answer';
import Number from './Number';
import Done from './Done';

class Game extends Component {

	render(){

		let bottomFrame;
		let doneStatus = false;

		if(doneStatus){
			bottomFrame = <Done/>
		} else {
			bottomFrame = <Number/>
		}

		return(
		<div className="container">
			<h2>Play Nine</h2>
			<div className="clearfix">
				<Star />
				<Button />
				<Answer />
			</div>
			{bottomFrame}
		</div>
		);
	}
}

export default Game;