import React from "react";
import {Link} from "react-router"; 

import "./App.sass";

const App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<div className="menu-item">
					<Link to="/about">About</Link>
					<Link to="/inbox">Inbox</Link>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
})

export default App;