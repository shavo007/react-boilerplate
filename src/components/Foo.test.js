/* eslint-disable no-console */
import React from 'react';
import Foo from './Foo';

it('should match snapshot', () => {
  const wrapper = shallow(<Foo />);
  console.log(wrapper.debug());

  expect(wrapper.find('h1').text()).toBe('Showcase code splitting');
  expect(wrapper).toMatchSnapshot();
});
