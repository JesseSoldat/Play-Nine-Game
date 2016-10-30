import {
	SELECT_NUMBER,
} from './types';


export function SelectNumber(number){
	return {
		type: SELECT_NUMBER,
		payload: number
	}
}