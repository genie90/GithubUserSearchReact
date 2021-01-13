import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import githubUsers from './githubUsers';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      githubUsers,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}
