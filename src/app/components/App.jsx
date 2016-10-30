import React, {Component} from 'react';

class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
		<div>
			<header className="navbar navbar-static-top navbar-inverse" role="banner">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle collapsed" type="button" data-toggle="collapsed"
						data-target=".bs-navbar-colapse">
						<span className="sr-only">
							Toggle navigation
						</span>
						<span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
     </div>
   	</header>
   </div>
		)
	}
}
export default App;