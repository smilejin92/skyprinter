import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DatePicker from './components/DatePicker';
import SearchBox from './components/Main/SearchBox';
import CabinClassAndPessenger from './components/CabinClassAndPessenger';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/datePicker" component={DatePicker} />
        <Route exact path="/searchBox" component={SearchBox} />
        <Route exact path="/cabinClass" component={CabinClassAndPessenger} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
