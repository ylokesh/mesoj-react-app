import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({type, name, placeholder, error, disabled, focus, value, labelText, onChange, autoComplete, info, aria}) => {
	return (
		<div className='uxt-input-group'>
			<label className='uxt-form--label' htmlFor={name}>
				{labelText}
			</label>
			<input
				className={classnames('form-control uxt-form--input', {
					'is-invalid': error
				})}
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				focus={focus}
				autoComplete={autoComplete}
				defaultValue={value}
				onChange={onChange}
				aria-describedby={aria}
			/>
			{error && <div className='invalid-feedback'>{error}</div>}
			{info && <div className='form-text form-text--info text-muted txt-teritiary'>{info}</div>}
		</div>
	);
};

TextFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	disabled: PropTypes.string
};

export default TextFieldGroup;
