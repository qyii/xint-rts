import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/Counter';
import counter from './store/count/reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <App
    value={store.getState()}
    onIncrement={onIncre}
    onDecrement={onDecre}
  />,
  document.getElementById('root') as HTMLElement
);

function onIncre() {
  return store.dispatch({ type: 'INCREMENT' })
}
function onDecre() {
  return store.dispatch({ type: 'DECREMENT' })
}

render()

store.subscribe(render)
