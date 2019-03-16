import React from 'react';
import {shallow} from 'enzyme';

import TextFieldGroup from '../molecules/TextFieldGroup';

// Suite
describe('Login Component', () => {
	let wrapper;
	let props = {
		name: 'email',
		placeholder: 'enter your email',
		value: '',
		type: 'text',
		onChange: jest.fn(),
		info: 'info message',
		error: 'error message',
		disabled: 'false'
	};

	beforeEach(() => {
		wrapper = shallow(<TextFieldGroup {...props} />);
	});

	it('should render an input element with given props', () => {
		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('input[name="email"]').exists()).toBe(true);
		expect(wrapper.find('input[placeholder="enter your email"]').exists()).toBe(true);
		expect(wrapper.find('input[type="text"]').exists()).toBe(true);
	});

	it('should render email placeholder if error message not empty', () => {
		expect(wrapper.find('.invalid-feedback').text()).toEqual(props.error);
	});

	it('should not render email placeholder if error message is empty', () => {
		wrapper.setProps({...props, ...{error: ''}});
		expect(wrapper.find('.invalid-feedback').exists()).toBeFalsy();
	});

	it('should render info placeholder if info message not empty', () => {
		expect(wrapper.find('.form-text--info').text()).toEqual(props.info);
	});

	it('should not render info placeholder if info message is empty', () => {
		wrapper.setProps({...props, ...{info: ''}});
		expect(wrapper.find('.form-text--info').exists()).toBe(false);
	});
});
