import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Chart } from '../../components/Chart';
import {chartData} from '../fixtures/data';

storiesOf('Chart', module)
  .add('default', () => (
    <Chart data={chartData} />
  ))
  ;   