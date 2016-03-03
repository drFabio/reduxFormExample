import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'
import Home from './pages/Home'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer)
const main = <Provider store = {store}><Home/></Provider>

ReactDOM.render(main, document.getElementById('app'))
require('./styles/main.scss')
