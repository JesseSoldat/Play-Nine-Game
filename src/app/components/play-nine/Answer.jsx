import React, {Component} from 'react';
import {connect} from 'react-redux';

class Answer extends Component {

	render(){

		let selectedNumbers = this.props.playNine.selectedNumbers.map(function(i){
			return(
			<span key={i}>
				{i}
			</span>
			);
		})

		return(
		<div id="answer-frame">
			<div className="well">
				{selectedNumbers}
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
export default connect(mapStateToProps)(Answer);