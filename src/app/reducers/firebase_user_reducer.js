import {
	LOGIN_FIREBASE_USER
} from '../actions/types';

export default function(state = null, action){
	switch (action.type) {
		case LOGIN_FIREBASE_USER:
			return action.payload;
	}

	return state;
}