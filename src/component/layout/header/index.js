// @flow
import * as React from 'react'
import styled from 'styled-components'
import { style } from 'asset/style'

const HeaderStyled = styled.div`
  font-size: 1rem;
  padding: 20px 20px;
  background-color: ${style.color.blue};
`

type Props = {}

export class Header extends React.PureComponent<Props> {
  render(): React.Node {
    return (
      <HeaderStyled>Table CSV - MadeByRogal</HeaderStyled>
    )
  }
}
