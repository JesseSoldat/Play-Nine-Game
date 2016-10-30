import React, {Component} from 'react';
import {connect} from 'react-redux';

class Star extends Component {

	render(){
		return(
		<div id="stars-frame">
			<div className="well">
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
export default connect(mapStateToProps)(Star);