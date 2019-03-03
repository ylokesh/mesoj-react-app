import React, {Component} from 'react';

export default class Divider extends Component {
	render() {
		let {type} = this.props;
		let cssClass = 'mt-4 mb-4 ml-auto mr-auto divider--or w-50';
		return <div className={cssClass}>{type ? <span>OR</span> : null}</div>;
	}
}
