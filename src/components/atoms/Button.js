import React, {Component} from 'react';

export default class Button extends Component {
	constructor(props) {
		super();
		this.onButtonClick = this.onButtonClick.bind(this);
	}
	onButtonClick(event) {
		let {onClick} = this.props;
		if (onClick) {
			onClick(event);
		}
	}
	render() {
		let {value, type, primary, secondary, transparent, block, inlineblock, disabled, loading, cssClass} = this.props;

		cssClass = cssClass + ' btn button';
		cssClass = primary ? cssClass + ' button-primary' : cssClass;
		cssClass = transparent ? cssClass + ' button-transparent' : cssClass;
		cssClass = secondary ? cssClass + ' button-secondary' : cssClass;
		cssClass = block ? cssClass + ' btn-block' : cssClass;
		cssClass = inlineblock ? cssClass + ' d-inline-block' : cssClass;
		cssClass = loading ? cssClass + ' is-loading' : cssClass;

		return (
			<button type={type} className={cssClass} disabled={disabled} onClick={this.onButtonClick}>
				{value}
			</button>
		);
	}
}
