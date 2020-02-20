import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TicketResult from './pages/TicketResult';
import { Provider } from 'react-redux';
import create from './redux/create';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/create';

const store = create();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/transport/flights" component={TicketResult} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
