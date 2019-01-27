// @flow
import { List } from 'immutable'
import type {
  AddColumnOnLeftAction,
  AddColumnOnRightAction,
  DeleteColumnAction,
  AddRowAboveAction,
  AddRowBelowAction,
  DeleteRowAction
} from './actions.type'
import * as CONST from './consts'

export type StateTable = {
  +data: List<List<string|number>>,
}

type Action = AddColumnOnLeftAction | AddColumnOnRightAction | DeleteColumnAction | AddRowAboveAction | AddRowBelowAction | DeleteRowAction

const initData = List([
  List(['Name 1', 'Name 2', 'Name 3']),
  List([1, 2, 3]),
  List([4, 5, 6]),
])

const initState: StateTable = {
  data: initData,
}

export function table (state: StateTable = initState, action: Action): StateTable {
  switch (action.type) {
    case CONST.SAVE_CELL:
      const { value, rowIdx, cellIdx } = action.payload
      
      return {
        ...state,
        data: state.data.setIn([rowIdx, cellIdx], value),
      }
    default:
      return state
  }
}
