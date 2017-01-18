import React from "react";
import MessagePreview from "./MessagePreview.jsx";
import messages from "../messages.json";

import "./InboxPage.sass";

let InboxPage = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			messages: messages
		}
	},

	handlePrevievClick(messageId) {
		this.context.router.push(`/inbox/messages/${messageId}`); 
	},

	render() {
		const {messageId: selectedMessageId} = this.props.params;
		return (
			<div className="inboxPage">
				<div className="messages">
					{
						this.state.messages.map((elem, idx) => {
							return (
									<MessagePreview
										key={elem.id}
										selected={elem.id === selectedMessageId}
										onClick={this.handlePrevievClick.bind(null, elem.id)}
										title={elem.subject}
										senderName={elem.senderName}
									/>
							)
						})
					}
				</div>
				<div className="messageContainer">
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default InboxPage;