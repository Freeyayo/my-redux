import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { helloSaga } from './sagas';

import rootReducer from './reducers/index';

import Counter from './components/counter';

const sagaMiddleware = createSagaMiddleware(helloSaga);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Counter/>
        </div>
      </Provider>
  );
}

export default App;
