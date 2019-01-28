// @flow
import { combineReducers, type CombinedReducer } from 'redux'
import { routerReducer } from 'react-router-redux'
import type { State } from 'reducer/state.type'
import type { Action } from 'reducer/action.type'
import { table } from './table/reducer'

export const rootReducer: CombinedReducer<State, Action> = combineReducers({
  routing: routerReducer,
  table,
})
