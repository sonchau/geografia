import React from 'react';
import { shallow } from 'enzyme';
import { Data } from '../../components/Data';

test('should render Data correctly', () => {
  const wrapper = shallow(<Data />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle click button correctly', () => {
  
  const handleOnClick = jest.fn();
  const value = 'dlgc_2011_ste_demo_age5gend';
  const wrapper = shallow(<Data handleOnClick={handleOnClick} />);
  wrapper.find('button').at(0).simulate('click', {
    target: { value }
  });
  expect(handleOnClick).toHaveBeenCalled();
});