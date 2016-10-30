import {combineReducers} from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import PlayNineReducer from './play_nine_reducer';

const rootReducer = combineReducers({
	currentUser: FireBaseUserReducer,
	playNine: PlayNineReducer
});

export default rootReducer;

