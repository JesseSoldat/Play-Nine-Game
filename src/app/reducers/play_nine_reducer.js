import {
	SELECT_NUMBER,
	REDRAW
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) +1;
}

const INITIAL_STATE = {
	stars: randomNumber(),
	selectedNumbers: [],
	usedNumbers: []
}

export default function(state = INITIAL_STATE, action){

	let indexOfNumber;
	let indexOfUsed;
	let selectedNumbers = [];

	switch(action.type){
		case SELECT_NUMBER:
			indexOfNumber = state.selectedNumbers.indexOf(action.payload);

			indexOfUsed = state.usedNumbers.indexOf(action.payload);

			if(indexOfNumber < 0 && indexOfUsed < 0) {
				selectedNumbers.push(action.payload);
			}

			return {
				...state,
				selectedNumbers: state.selectedNumbers.concat(selectedNumbers)
			}
		case REDRAW:
			return {
				...state
			};

		default:
			return state;
	}
}