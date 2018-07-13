import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mainDisplay'),
);
