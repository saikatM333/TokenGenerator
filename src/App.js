// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TokenGeneratorApp from './components/TokenGeneratorApp';

const App = () => (
  <Provider store={store}>
    <TokenGeneratorApp />
  </Provider>
);

export default App;
