import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TicketResult from './pages/TicketResult';
import { Provider } from 'react-redux';
import create from './redux/create';
import { ConnectedRouter } from 'connected-react-router';
import ErrorBoundary from 'react-error-boundary';
import { history } from './redux/create';
import NotFound from './pages/NotFound';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;
const store = create();

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/transport/flights/:originId/:destId/:inboundDate/:outboundDate"
              component={TicketResult}
            />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
