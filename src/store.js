import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { loadState, saveState } from './localstorage';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = loadState() || {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
