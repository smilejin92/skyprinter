import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import DatePicker from './DatePicker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DatePicker />, document.getElementById('root'));

module.hot.accept();
