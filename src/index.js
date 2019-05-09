/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import App from './components/App';

import './styles/style.sass';

const engine = new Styletron();

const rootElement = document.getElementById('app');
ReactDOM.render(
  <StyletronProvider value={engine}>
    <App />
  </StyletronProvider>,
  rootElement
);
