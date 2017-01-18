import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, hashHistory} from "react-router";

import Messages from "./components/Messages.jsx";
import InboxPage from "./components/InboxPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import App from "./App.jsx";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/about" component={AboutPage} />
			<Route path="/inbox" component={InboxPage}>
				<Route path="/inbox/messages/:messageId" component={Messages} />
			</Route>
		</Route>
	</Router>,
	document.getElementById("mount-point")
);