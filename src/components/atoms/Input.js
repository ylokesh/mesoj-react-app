import React, {Component} from 'react';

export default class Input extends Component {
	loading() {
		return <i aria-hidden='true' class='user icon' />;
	}
	onChange(event) {
		let onChange = this.props.onChange;
		if (onChange) {
			onChange(event);
		}
	}
	render() {
		let {type, id, placeholder, error, disabled, focus, loading, autoComplete, value} = this.props;
		let cssClass = 'form-control uxt-form--input';
		cssClass = error ? cssClass + ' error' : cssClass;
		return (
			<div>
				<input
					className={cssClass}
					type={type}
					id={id}
					placeholder={placeholder}
					disabled={disabled}
					focus={focus}
					autoComplete={autoComplete}
					defaultValue={value}
					onChange={this.onChange}
				/>
				{loading ? this.loading() : null}
			</div>
		);
	}
}
