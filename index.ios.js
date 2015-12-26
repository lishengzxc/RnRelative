import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import App from './App';
import reactive from './reducers';

let store = createStore(reactive);

class RnRelative extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

React.AppRegistry.registerComponent('RnRelative', () => RnRelative);
