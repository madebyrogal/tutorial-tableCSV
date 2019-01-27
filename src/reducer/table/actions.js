// @flow
import * as CONST from './consts'
import type {
  AddColumnOnLeftAction,
  AddColumnOnRightAction,
  DeleteColumnAction,
  AddRowAboveAction,
  AddRowBelowAction,
  DeleteRowAction,
  SaveCellAction,
} from './actions.type'

export type AddColumnOnLeftFunction = (index: number) => AddColumnOnLeftAction
export const addColumnOnLeft: AddColumnOnLeftFunction = (index) => ({
  type: CONST.ADD_COLUMN_ON_LEFT,
  payload: {
    index,
  },
})

export type AddColumnOnRightFunction = (index: number) => AddColumnOnRightAction
export const addColumnOnRight: AddColumnOnRightFunction = (index) => ({
  type: CONST.ADD_COLUMN_ON_RIGHT,
  payload: {
    index,
  },
})

export type DeleteColumnFunction = (index: number) => DeleteColumnAction
export const deleteColumn: DeleteColumnFunction = (index) => ({
  type: CONST.DELETE_COLUMN,
  payload: {
    index,
  },
})

export type AddRowAboveFunction = (index: number) => AddRowAboveAction
export const addRowAbove: AddRowAboveFunction = (index) => ({
  type: CONST.ADD_ROW_ABOVE,
  payload: {
    index,
  },
})

export type AddRowBelowFunction = (index: number) => AddRowBelowAction
export const addRowBelow: AddRowBelowFunction = (index) => ({
  type: CONST.ADD_ROW_BELOW,
  payload: {
    index,
  },
})

export type DeleteRowFunction = (index: number) => DeleteRowAction
export const deleteRow: DeleteRowFunction = (index) => ({
  type: CONST.DELETE_ROW,
  payload: {
    index,
  },
})

export type SaveCellFunction = (value: string, rowIdx: number, cellIdx: number) => SaveCellAction
export const saveCell: SaveCellFunction = (value, rowIdx, cellIdx) => ({
  type: CONST.SAVE_CELL,
  payload: {
    value,
    rowIdx,
    cellIdx,
  }
})



