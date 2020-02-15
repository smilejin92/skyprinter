import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
// import App from './App';
// import CabinClassAndPessenger from './components/CabinClassAndPessenger';

import ClassGradeButton from './components/CabinClassPessenger/index';
ReactDOM.render(<ClassGradeButton />, document.getElementById('root'));

module.hot.accept();
