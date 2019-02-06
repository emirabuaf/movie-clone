import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

import promise from 'redux-promise';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
