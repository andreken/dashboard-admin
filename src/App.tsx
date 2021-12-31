import React from 'react';
import { Provider } from 'react-redux'

import configureStore from './redux'
import Routes from './routes'

const store = configureStore()

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
