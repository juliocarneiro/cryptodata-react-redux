import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router'

import history from '../routes/history'

const middlewares = [
    thunk,
    routerMiddleware(history)
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(connectRouter(history)(reducers), composeEnhancers(
    applyMiddleware(...middlewares)
))

export default store