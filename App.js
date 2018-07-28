import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './config/store'
import Router from './config/router';

export default class App extends Component {
  render() {
    let store = configureStore();

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}