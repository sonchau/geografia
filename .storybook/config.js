import { configure } from '@storybook/react';
import '../src/styles/styles.scss';

const req = require.context('../src/tests/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module);