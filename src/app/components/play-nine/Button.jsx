import React, {Component} from 'react';

class Button extends Component {

	render(){
		let button;
		let correct = null;

		switch(correct){
			case true:
				return
			case false:
				return
			default:
				button = (
				<button className="btn btn-primary btn-lg">=
				</button>
				)
		}
		return(
		<div id="button-frame">
			{button}
			<br/><br/>
			<button className="btn btn-warning btn-xs">
				<span className="glyphicon glyphicon-refresh">
				</span>
			</button>
		</div>
		);
	}
}

export default Button;