// @flow
import { connect } from 'react-redux'
import type { State } from 'reducer/state.type'
import { PageHome } from './index'

const mapStateToProps = (state: State) => ({
  data: state.table.data
})

export const PageHomeContainer = connect(mapStateToProps)(PageHome)
