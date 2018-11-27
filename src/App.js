import React, { Component } from 'react';

import {Provider} from 'react-redux'
import store from './store/index.js'

import Routes from './routes/index.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
