import React from 'react';
import App from './App';

it('should match snapshot', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
