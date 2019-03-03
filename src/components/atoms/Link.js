import React, {Component} from 'react';

export default class Link extends Component {
	render() {
		let {text, cssClass, href} = this.props;
		return (
			<a className={cssClass} href={href} title={text}>
				{text}
			</a>
		);
	}
}
