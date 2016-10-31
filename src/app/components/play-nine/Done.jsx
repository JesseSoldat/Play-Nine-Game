import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PlayAgain} from '../../actions/play_nine_actions';

class Done extends Component {

	render(){
		return(
		<div className="well text-center">
			<h2>{this.props.playNine.doneStatus}</h2>
			<button className="btn btn-default" onClick={this.props.PlayAgain}>
				Play Again
			</button>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playNine: state.playNine
	}
}
export default connect(mapStateToProps, {PlayAgain})(Done);