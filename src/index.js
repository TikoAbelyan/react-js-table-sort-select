import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import  TableContainer  from './components/table-container';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TableContainer/>
  </Provider>,
  document.getElementById('root')
);

