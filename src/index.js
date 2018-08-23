import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterConfig from './router'
import StorePro from './store/index.js'
import { Provider } from 'react-redux'
const store = StorePro();
ReactDOM.render(
<Provider store={store}>
    <RouterConfig />
</Provider>, document.getElementById('root'));



