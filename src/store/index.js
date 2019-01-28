// @flow
import { applyMiddleware, compose, createStore, type Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { rootReducer } from 'reducer'
import type { State } from 'reducer/state.type'
import type { Action } from 'reducer/action.type'
import { history } from './history'

const routerHistoryMiddleware = routerMiddleware(history)
/**
 * @param {{__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function}} window
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

export const store: Store<State, Action> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerHistoryMiddleware)),
)

