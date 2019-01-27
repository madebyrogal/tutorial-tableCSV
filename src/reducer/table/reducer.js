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
  +selectedRow: ?number,
  +selectedColumn: ?number,
}

type Action = AddColumnOnLeftAction | AddColumnOnRightAction | DeleteColumnAction | AddRowAboveAction | AddRowBelowAction | DeleteRowAction

const initData = List([
  List(['Name 1', 'Name 2', 'Name 3']),
  List([1, 2, 3]),
  List([4, 5, 6]),
])

const initState: StateTable = {
  data: initData,
  selectedRow: 2, //TODO Calculate if there will be complicated initial data
  selectedColumn: 2, //TODO Calculate if there will be complicated initial data
}

export function table (state: StateTable = initState, action: Action): StateTable {
  switch (action.type) {
    case CONST.SAVE_CELL:
      const { value, rowIdx, cellIdx } = action.payload
      
      return {
        ...state,
        data: state.data.setIn([rowIdx, cellIdx], value),
      }
    case CONST.SELECT_CELL:
      return {
        ...state,
        selectedRow: action.payload.rowIdx,
        selectedColumn: action.payload.cellIdx,
      }
    default:
      return state
  }
}
