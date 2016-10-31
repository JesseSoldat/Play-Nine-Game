import {
	SELECT_NUMBER,
	UNSELECT_NUMBER,
	CHECK_ANSWER,
	ACCEPT_ANSWER,
	REDRAW,
	CHECK_GAME_OVER,
	PLAY_AGAIN
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

export function Redraw(){
	return {
		type: REDRAW
	}
}

export function CheckGameOver(message){
	return {
		type: CHECK_GAME_OVER,
		payload: message
	}
}

export function PlayAgain(){
	return {
		type: PLAY_AGAIN
	}
}