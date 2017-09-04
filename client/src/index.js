import React from 'react';
import ReactDOM from 'react-dom';

import { Provider  } from 'react-redux';
import App from './components/App';

import { createStore } from 'redux';
import counterApp from './reducers';
import * as actions from './actions'

const store = createStore(counterApp);
////<--
console.log(store.getState());
store.subscribe(()=>console.log(store.getState()))
//store값이 변하는지 감시하는 함수

store.dispatch(actions.increment()); 
store.dispatch(actions.increment());
//특정 액션을 디스패처로 전달하는 함수

////--> 테스트 칸
const appElement = document.getElementById('root');

ReactDOM.render(
  <Provider store = {store}> 
      <App />
  </Provider>,
  appElement
);
// Provider 컴포넌트 내애서 redux를 사용하게함.