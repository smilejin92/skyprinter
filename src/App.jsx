import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import create from './redux/create';
import TicketResult from './pages/TicketResult';

const store = create();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/transport/flights" component={TicketResult} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
