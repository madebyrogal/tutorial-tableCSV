// @flow
import * as React from 'react'
import type { ModelTable } from 'model/table'
import type { ModelRow } from 'model/row'
import { TableStyled } from './style'
import { Row } from './row'

type Props = {
  data: ModelTable,
}

export class Table extends React.PureComponent<Props> {
  render (): React.Node {
    const { data } = this.props
    
    return (
      <TableStyled>
        <tbody>
          {data.map((row: ModelRow, idx: number) => <Row key={idx} rowIdx={idx} row={row}/>)}
        </tbody>
      </TableStyled>
    )
  }
}
