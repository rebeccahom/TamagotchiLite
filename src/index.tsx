import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore  } from 'redux'

import App from './components/App'
import './index.css'
import reducer from './reducers'

const store = createStore (reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);