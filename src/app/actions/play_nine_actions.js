import {
	SELECT_NUMBER,
	UNSELECT_NUMBER,
	CHECK_ANSWER,
	ACCEPT_ANSWER
} from './types';


export function SelectNumber(number){
	return {
		type: SELECT_NUMBER,
		payload: number
	}
}

export function UnSelectNumber(number){
	return {
		type: UNSELECT_NUMBER,
		payload: number
	}
}

export function CheckAnswer(){
	return {
		type: CHECK_ANSWER
	}
}

export function AcceptAnswer(){
	return {
		type: ACCEPT_ANSWER
	}
}