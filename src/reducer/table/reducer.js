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
  +selectedRow: number,
  +selectedColumn: number,
}

type Action = AddColumnOnLeftAction | AddColumnOnRightAction | DeleteColumnAction | AddRowAboveAction | AddRowBelowAction | DeleteRowAction

const initData = List([
  List(['Name 1', 'Name 2', 'Name 3']),
  List([1, 2, 3]),
  List([4, 5, 6]),
])

const initState: StateTable = {
  data: initData,
  selectedRow: initData.size - 1,
  //$FlowFixMe
  selectedColumn: initData.get(0).size - 1,
}

export function table (state: StateTable = initState, action: Action): StateTable {
  const rowsAmount = state.data.size
  // $FlowFixMe
  const columnsAmount = state.data.get(0) ? state.data.get(0).size : 0
  const emptyArray = new Array(columnsAmount).fill('')
  
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
    case CONST.ADD_ROW_ABOVE:
      return {
        ...state,
        data: state.data.insert(action.payload.index, List(List(emptyArray)))
      }
    case CONST.ADD_ROW_BELOW:
      return {
        ...state,
        data: state.data.insert(action.payload.index + 1, List(List(emptyArray)))
      }
    case CONST.ADD_COLUMN_ON_LEFT:
      return {
        ...state,
        data: state.data.map((row) => row.insert(action.payload.index, ''))
      }
    case CONST.ADD_COLUMN_ON_RIGHT:
      return {
        ...state,
        data: state.data.map((row) => row.insert(action.payload.index + 1, ''))
      }
    case CONST.DELETE_ROW:
      if (rowsAmount > 1) {
        return {
          ...state,
          data: state.data.delete(action.payload.index),
          selectedRow: state.selectedRow <= 0 ? 0 : state.selectedRow - 1
        }
      }
      
      return state
    case CONST.DELETE_COLUMN:
      if (columnsAmount > 1) {
        return {
          ...state,
          data: state.data.map((row) => row.delete(action.payload.index)),
          selectedColumn: state.selectedColumn <= 0 ? 0 : state.selectedColumn - 1
        }
      }
      
      return state
    default:
      return state
  }
}
