import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../../components/Chart';
import {chartData} from '../fixtures/data';

test('should render Chart correctly', () => {
  const wrapper = shallow(<Chart data={chartData} />);
  expect(wrapper).toMatchSnapshot();
});

