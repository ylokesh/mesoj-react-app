import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from '../organisms/Sidebar';

// Suite
describe('Sidebar Component', () => {
	it('should render without throwing an error', () => {
		expect(
			shallow(<Sidebar />)
				.find('.ms-sidebar')
				.exists()
		).toBe(true);
	});
});

// describe('Login Component', () => {
// 	it('should render without throwing an error', () => {
// 		expect(
// 			shallow(<Login />)
// 				.find('form')
// 				.exists()
// 		).toBe(true);
// 	});
// });

// describe('Login Component', () => {
// 	it('should render without throwing an error', () => {
// 		var LoginComponent = shallow(<Login />);
// 		expect(LoginComponent.find('form').hasClass('uxt-form')).toBeTruthy();
// 	});

// it('renders a email input', () => {
// 	expect(shallow(<Login />).find('#email').length).toEqual(1);
// });

// it('renders a password input', () => {
// 	expect(shallow(<Login />).find('#password').length).toEqual(1);
// });
// });

// describe('Email input', () => {
// 	it('should respond to change event and change the state of the Login Component', () => {
// 		const wrapper = shallow(<Login />);
// 		wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

// 		expect(wrapper.state('email')).toEqual('blah@gmail.com');
// 	});
// });

// describe('Password input', () => {
// 	it('should respond to change event and change the state of the Login Component', () => {
// 		const wrapper = shallow(<Login />);
// 		wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

// 		expect(wrapper.state('password')).toEqual('cats');
// 	});
// });
