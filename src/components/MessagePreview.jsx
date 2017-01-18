import React from "react" ;
import classNames from "classnames";

import "./MessagePreview.sass";

let MessagePreview = React.createClass({
	render() {
		const {title, senderName, selected, onClick} = this.props;
		const classes = classNames("messagePreview", {selected});
		return (
			<div className={classes} onClick={onClick}>
				<div className="title">
					{title}
				</div>

				<div className="from">
					{`From ${senderName}`}
				</div>
			</div>
		);
	}
});

export default MessagePreview;