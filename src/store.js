import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import requestUtil from './utils/request';
import logicList from './logic';
import reducers from './reducers';
import { ENV } from './constants';

function configureStore() {
  const injectedHelpers = { requestUtil };
  const logicMiddleware = createLogicMiddleware(logicList, injectedHelpers);

  let store = {};
  if (ENV === 'production') {
    store = createStore(
      reducers,
      applyMiddleware(logicMiddleware),
    );
  } else {
    store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(logicMiddleware)),
    );
  }

  return store;
}

export default configureStore();
