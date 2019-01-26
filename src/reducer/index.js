// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { table } from './table/reducer'

export const rootReducer = combineReducers({
  routing: routerReducer,
  table,
})
