import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
//sagas
import { helloSaga } from './sagas';
//reducers
import rootReducer from './reducers/index';
//components
import Counter from './components/counter';

const sagaMiddleware = createSagaMiddleware(helloSaga);

const middlewares = [thunk, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(helloSaga)

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Counter method="add"/>
          <Counter method="addAsync"/>
          <Counter method="minus"/>
        </div>
      </Provider>
  );
}

export default App;
