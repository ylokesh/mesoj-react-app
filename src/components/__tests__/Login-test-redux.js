import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedLogin, {Login} from '../organisms/Login';
import {Provider} from 'react-redux';

const mockStore = configureStore();
let store, component;

// Suite
describe('Login Component', () => {
	beforeEach(() => {
		store = mockStore({
			loginUser: jest.fn(),
			auth: {},
			errors: {}
		});
		component = mount(
			<Provider store={store}>
				<Router>
					<ConnectedLogin />
				</Router>
			</Provider>
		);
	});

	it('should render without throwing an error', () => {
		expect(
			component
				.find(Login)
				.find('.uxt-form')
				.exists()
		).toBe(true);
	});

	// it('renders a email input', () => {
	// 	// With Unique Identifier
	// 	const textFieldComponent = component.find('TextFieldGroup[name="email"]').shallow();
	// 	expect(textFieldComponent.find('#email').length).toEqual(1);

	// 	// With Index Value i.e. at(index)
	// 	// var textFieldComponent = LoginComponent.find('TextFieldGroup').at(0).shallow();
	// 	// expect(textFieldComponent.find('#email').length).toEqual(1);
	// });

	// it('renders a password input', () => {
	// 	var textFieldComponent = component.find('TextFieldGroup[name="password"]').shallow();
	// 	expect(textFieldComponent.find('#password').length).toEqual(1);
	// });
});
