import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
//sagas
import rootSagas from './sagas';
//reducers
import rootReducer from './reducers/index';
//components
import Counter from './components/counter';

const sagaMiddleware = createSagaMiddleware(rootSagas);

const middlewares = [thunk, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSagas)

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Counter method="add"/>
          <Counter method="addSaga"/>
          <Counter method="addAsync"/>
          <Counter method="addSagaAsync"/>
          <Counter method="minus"/>
        </div>
      </Provider>
  );
}

export default App;
