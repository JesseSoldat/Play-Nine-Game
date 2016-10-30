import React, {Component} from 'react';
import {connect} from 'react-redux';

class Number extends Component {

	render(){
		let numbers = [];
		let className;

		for(let i =1; i < 9; i++){
			className = "number";
			
			numbers.push(
			<div key={i} className={className}>
				{i}
			</div>
			);
		}

		return(
		<div id="numbers-frame">
			<div className="well">
			 	{numbers}
			</div>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playNine: state.playNine
	}
}

export default connect(mapStateToProps)(Number);

