// @flow
import { connect } from 'react-redux'
import { saveCell } from 'reducer/table/actions'
import { Cell } from './index'

const mapStateToProps = () => ({})

export const CellContainer = connect(mapStateToProps, {
  saveCell
})(Cell)
