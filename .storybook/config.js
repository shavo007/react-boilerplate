import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

configure(loadStories, module);
