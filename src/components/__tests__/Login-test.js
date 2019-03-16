import React from 'react';
import {shallow} from 'enzyme';

import {Login} from '../organisms/Login';

// Suite
describe('Login Component', () => {
	let LoginComponent;

	beforeEach(() => {
		LoginComponent = shallow(<Login loginuser={jest.fn()} auth={{}} errors={{}} />);
	});

	it('should render without throwing an error', () => {
		expect(LoginComponent.find('.uxt-form').exists()).toBe(true);
	});

	it('renders a email input', () => {
		// With Unique Identifier
		const textFieldComponent = LoginComponent.find('TextFieldGroup[name="email"]').shallow();
		expect(textFieldComponent.find('#email').length).toEqual(1);

		// With Index Value i.e. at(index)
		// var textFieldComponent = LoginComponent.find('TextFieldGroup').at(0).shallow();
		// expect(textFieldComponent.find('#email').length).toEqual(1);
	});

	it('renders a password input', () => {
		var textFieldComponent = LoginComponent.find('TextFieldGroup[name="password"]').shallow();
		expect(textFieldComponent.find('#password').length).toEqual(1);
	});
});
