import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UnSelectNumber} from '../../actions/play_nine_actions';

class Answer extends Component {

	render(){

		let unSelectedNumber = this.props.playNine.unSelectedNumber;

		let selectedNumbers = this.props.playNine.selectedNumbers.map(function(i){
			return(
			<span key={i}>
				{i}
			</span>
			);
		})

		return(
		<div id="answer-frame">
			<div className="well" onClick={this.props.UnSelectNumber}>
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
export default connect(mapStateToProps, {UnSelectNumber})(Answer);