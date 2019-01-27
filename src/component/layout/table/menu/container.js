// @flow
import { connect } from 'react-redux'
import {
  addRowAbove,
  addRowBelow,
  addColumnOnLeft,
  addColumnOnRight,
  deleteRow,
  deleteColumn,
} from 'reducer/table/actions'
import type { State } from 'reducer/state.type'
import { TableMenu } from './index'

const mapStateToProps = (state: State) => ({
  selectedRow: state.table.selectedRow,
  selectedColumn: state.table.selectedColumn,
  data: state.table.data.toJS(),
})

export const TableMenuContainer = connect(mapStateToProps, {
  addRowAbove,
  addRowBelow,
  addColumnOnLeft,
  addColumnOnRight,
  deleteRow,
  deleteColumn,
})(TableMenu)
