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

const TableMenuStyled = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid ${style.color.grayDark};
  background-color: ${style.color.gray};
  display: flex;
  justify-content: space-between;
`

type Props = {}

export class TableMenu extends React.PureComponent<Props> {
  render (): React.Node {
    return (
      <TableMenuStyled>
        <div>
          <IconAddRowAbove />
          <IconAddRowBelow />
          <IconAddColumnLeft />
          <IconAddColumnRight />
        </div>
        <div>
          <IconDeleteRow />
          <IconDeleteColumn />
        </div>
      </TableMenuStyled>
    )
  }
}
