// @flow
import * as React from 'react'
import styled from 'styled-components'

const ContentStyled = styled.div`
  box-sizing: content-box;
  padding: 20px 20px 80px;
`

type Props = {
  children?: React.Node,
}

export class Content extends React.PureComponent<Props> {
  render(): React.Node {
    return (
      <ContentStyled>{this.props.children}</ContentStyled>
    )
  }
}
