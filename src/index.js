import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
// import App from './App';
import CabinClassAndPessenger from './components/CabinClassAndPessenger';

ReactDOM.render(<CabinClassAndPessenger />, document.getElementById('root'));

module.hot.accept();
