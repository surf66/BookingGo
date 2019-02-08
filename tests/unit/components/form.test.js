import React from 'react';
import Form from '../../../src/js/components/form';

test('should match snapshot', () => {
  const component = shallow(<Form />);

  expect(component).toMatchSnapshot();
});