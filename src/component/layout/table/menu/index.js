// @flow
import * as React from 'react'
import styled from 'styled-components'
import { style } from 'asset/style'
import { IconAddRowAbove } from 'component/layout/icon/addRowAbove'
import { IconAddRowBelow } from 'component/layout/icon/addRowBelow'
import { IconAddColumnLeft } from 'component/layout/icon/addColumnLeft'
import { IconAddColumnRight } from 'component/layout/icon/addColumnRight'
import { IconDeleteRow } from 'component/layout/icon/deleteRowBelow'
import { IconDeleteColumn } from 'component/layout/icon/deleteColumn'
import type {
  AddRowAboveFunction,
  AddRowBelowFunction,
  AddColumnOnLeftFunction,
  AddColumnOnRightFunction,
  DeleteRowFunction,
  DeleteColumnFunction,
} from 'reducer/table/actions'
import { IconExportToCSV } from '../../icon/exportToCSV'
import type { ModelTable } from '../../../../model/table'
import { prepareCSVContentFromArray } from '../../../../utils/csv'

const TableMenuStyled = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid ${style.color.grayDark};
  background-color: ${style.color.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type Props = {
  selectedRow: number,
  selectedColumn: number,
  data: ModelTable,
  addRowAbove: AddRowAboveFunction,
  addRowBelow: AddRowBelowFunction,
  addColumnOnLeft: AddColumnOnLeftFunction,
  addColumnOnRight: AddColumnOnRightFunction,
  deleteRow: DeleteRowFunction,
  deleteColumn: DeleteColumnFunction,
}

export class TableMenu extends React.PureComponent<Props> {
  handleAddRowAbove = () => {
    this.props.addRowAbove(this.props.selectedRow)
  }
  
  handleAddRowBelow = () => {
    this.props.addRowBelow(this.props.selectedRow)
  }
  
  handleAddColumnOnLeft = () => {
    this.props.addColumnOnLeft(this.props.selectedColumn)
  }
  
  handleAddColumnOnRight = () => {
    this.props.addColumnOnRight(this.props.selectedColumn)
  }
  
  handleDeleteRow = () => {
    this.props.deleteRow(this.props.selectedRow)
  }
  
  handleDeleteColumn = () => {
    this.props.deleteColumn(this.props.selectedColumn)
  }
  
  handleExportToCSV = () => {
    const csvContent = prepareCSVContentFromArray(this.props.data)
    window.open(csvContent)
  }
  
  render (): React.Node {
    return (
      <TableMenuStyled>
        <div>
          <IconAddRowAbove onClick={this.handleAddRowAbove} />
          <IconAddRowBelow onClick={this.handleAddRowBelow} />
          <IconAddColumnLeft onClick={this.handleAddColumnOnLeft} />
          <IconAddColumnRight onClick={this.handleAddColumnOnRight} />
        </div>
        <div>
          <IconDeleteRow onClick={this.handleDeleteRow} />
          <IconDeleteColumn onClick={this.handleDeleteColumn} />
        </div>
        <div>
          <IconExportToCSV onClick={this.handleExportToCSV}/>
        </div>
      </TableMenuStyled>
    )
  }
}
