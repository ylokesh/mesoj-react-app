import React from 'react';
import {shallow} from 'enzyme';

import {Login} from '../organisms/Login';
import TextFieldGroup from '../molecules/TextFieldGroup';

// Suite
describe('Login Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login loginuser={jest.fn()} auth={{}} errors={{}} />);
	});

	it('should render without throwing an error', () => {
		expect(wrapper.find('.uxt-form').exists()).toBe(true);
	});

	it('should render two text field groups', () => {
		expect(wrapper.find(TextFieldGroup)).toHaveLength(2);
	});
});
