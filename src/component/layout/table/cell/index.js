// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { ModelCell } from 'model/cell'
import { style } from 'asset/style'

const TDStyled = styled.td`
  border-bottom: 1px solid ${style.color.gray};
  padding: 5px 10px;
  
  div {
    outline: none;
  }
`

type Props = {
  cell: ModelCell
}

export class Cell extends React.PureComponent<Props> {
  cellElem: {current: null | HTMLDivElement}
  
  constructor(props: Props) {
    super(props)
    this.cellElem = React.createRef();
  }
  
  handleCellEdit = () => {
    const cellElem = this.cellElem.current
    
    if(cellElem) {
      cellElem.setAttribute('contenteditable', "true")
      cellElem.focus()
    }
  }
  
  handleCellSave = () => {
    const cellElem = this.cellElem.current
  
    if(cellElem) {
      cellElem.removeAttribute('contenteditable')
      // TODO Save cell value
      // const cellValue = cellElem.textContent
    }
  }
  
  render (): React.Node {
    const { cell } = this.props
    
    return (
      <TDStyled>
        <div ref={this.cellElem} onClick={this.handleCellEdit} onBlur={this.handleCellSave}>{cell}</div>
      </TDStyled>
    )
  }
}
