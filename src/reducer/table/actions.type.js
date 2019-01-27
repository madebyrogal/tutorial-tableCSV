// @flow
import * as CONST from './consts'

export type AddColumnOnLeftAction = {
  type: typeof CONST.ADD_COLUMN_ON_LEFT,
  payload: {
    index: number,
  },
}

export type AddColumnOnRightAction = {
  type: typeof CONST.ADD_COLUMN_ON_RIGHT,
  payload: {
    index: number,
  },
}


export type DeleteColumnAction = {
  type: typeof CONST.DELETE_COLUMN,
  payload: {
    index: number,
  },
}

export type AddRowAboveAction = {
  type: typeof CONST.ADD_ROW_ABOVE,
  payload: {
    index: number,
  },
}

export type AddRowBelowAction = {
  type: typeof CONST.ADD_ROW_BELOW,
  payload: {
    index: number,
  },
}

export type DeleteRowAction = {
  type: typeof CONST.DELETE_ROW,
  payload: {
    index: number,
  },
}

export type SaveCellAction = {
  type: typeof CONST.SAVE_CELL,
  payload: {
    value: string,
    rowIdx: number,
    cellIdx: number,
  },
}
