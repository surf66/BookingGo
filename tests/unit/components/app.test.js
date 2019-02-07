import React from 'react';
import App from '../../../src/js/components/app';

test('should match snapshot', () => {
  const component = mount(<App />);

  expect(component).toMatchSnapshot();
});