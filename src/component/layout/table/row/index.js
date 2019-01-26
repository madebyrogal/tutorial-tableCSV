// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { ModelRow } from 'model/row'
import type { ModelCell } from 'model/cell'
import { Cell } from '../cell'

const TRStyled = styled.tr`

`

type Props = {
  row: ModelRow
}

export class Row extends React.PureComponent<Props> {
  render (): React.Node {
    const { row } = this.props
    
    return (
      <TRStyled>
        {row.map((cell: ModelCell, idx: number) => <Cell key={idx} cell={cell} />)}
      </TRStyled>
    )
  }
}
