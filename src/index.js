import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import textCards from './reducers/textCards'
import App from './components/App'
import './css/index.css';

let store = createStore(textCards)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
