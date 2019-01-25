// @flow
import * as React from 'react'
import styled from 'styled-components'

const ContentStyled = styled.div`
  box-sizing: content-box;
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
