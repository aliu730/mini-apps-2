import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import AppContainer from './containers/AppContainer';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('mainDisplay'),
);
