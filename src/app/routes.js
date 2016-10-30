import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Game from './components/play-nine/Game';

export default (
<Route path="/" component={App}>
	<Route path="/play-nine" component={Game}/>
</Route>
)