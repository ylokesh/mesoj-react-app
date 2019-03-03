import React, {Component} from 'react';

export default class InputLabel extends Component {
	render() {
		let {labelText, htmlFor} = this.props;
		let cssClass = 'uxt-form--label';
		return (
			<label className={cssClass} htmlFor={htmlFor}>
				{labelText}
			</label>
		);
	}
}
