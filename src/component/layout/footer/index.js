// @flow
import * as React from 'react'
import styled from 'styled-components'
import { style } from 'asset/style'

const FooterStyled = styled.div`
  font-size: 1rem;
  padding: 20px;
  background-color: ${style.color.black};
  color: ${style.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

type Props = {}

export class Footer extends React.PureComponent<Props> {
  render(): React.Node {
    const currentYear = new Date().getFullYear()
    
    return (
      <FooterStyled>Copyright {currentYear} - MadeByRogal</FooterStyled>
    )
  }
}
