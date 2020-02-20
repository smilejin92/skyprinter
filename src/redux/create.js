import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './modules/rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
