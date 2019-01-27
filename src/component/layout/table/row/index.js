// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { ModelRow } from 'model/row'
import type { ModelCell } from 'model/cell'
import { CellContainer } from '../cell/container'

const TRStyled = styled.tr`

`

type Props = {
  row: ModelRow,
  rowIdx: number,
}

export class Row extends React.PureComponent<Props> {
  render (): React.Node {
    const { row, rowIdx } = this.props
    
    return (
      <TRStyled>
        {row.map((cell: ModelCell, idx: number) => <CellContainer key={idx} rowIdx={rowIdx} cellIdx={idx} cell={cell} />)}
      </TRStyled>
    )
  }
}
