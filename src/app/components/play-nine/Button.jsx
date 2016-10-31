import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CheckAnswer, AcceptAnswer, Redraw} from '../../actions/play_nine_actions';

class Button extends Component {

	render(){
		let button;
		let disabled;
		let refreshDisabled = (this.props.playNine.redraws === 0);
		let correct = this.props.playNine.correct;

		switch(correct){
			case true:
				button = (
				<button className="btn btn-success btn-lg"
					onClick={this.props.AcceptAnswer}>
					<span className="glyphicon glyphicon-ok">
					</span>
				</button>
				);
				break

			case false:
				button = (
				<button className="btn btn-danger btn-lg">
					<span className="glyphicon glyphicon-remove">
					</span>
				</button>
				);
				break

			default:

			disabled = (this.props.playNine.selectedNumbers.length === 0);

				button = (
				<button className="btn btn-primary btn-lg" disabled={disabled}
					onClick={this.props.CheckAnswer}>=
				</button>
				)
		}
		return(
		<div id="button-frame">
			{button}
			<br/><br/>
			<button className="btn btn-warning btn-xs" disabled={refreshDisabled}
				onClick={this.props.Redraw}>
				<span className="glyphicon glyphicon-refresh">
				&nbsp; {this.props.playNine.redraws}
				</span>
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
export default connect(mapStateToProps, {CheckAnswer, AcceptAnswer, Redraw})(Button);