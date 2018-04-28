import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  LoadingPage  from '../../components/LoadingPage';

storiesOf('Loading Page', module)
  .add('default', () => (
    <LoadingPage />
  ))
  ;   