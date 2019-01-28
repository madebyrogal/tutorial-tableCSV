// @flow
import type {
  AddColumnOnLeftAction,
  AddColumnOnRightAction,
  DeleteColumnAction,
  AddRowAboveAction,
  AddRowBelowAction,
  DeleteRowAction
} from 'reducer/table/actions.type'

export type Action = AddColumnOnLeftAction | AddColumnOnRightAction | DeleteColumnAction | AddRowAboveAction | AddRowBelowAction | DeleteRowAction
