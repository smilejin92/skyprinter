import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DatePicker from './components/DatePicker';
import SearchBox from './components/Main/SearchBox';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/datePicker" component={DatePicker} />
        <Route exact path="/SearchBox" component={SearchBox} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
