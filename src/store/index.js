// @flow
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { rootReducer } from 'reducer'
import { history } from './history'

const routerHistoryMiddleware = routerMiddleware(history)
/**
 * @param {{__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function}} window
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerHistoryMiddleware)),
)

