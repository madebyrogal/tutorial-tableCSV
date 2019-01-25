// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Header } from 'component/layout/header'
import { Content } from 'component/layout/content'
import { Footer } from 'component/layout/footer'

const PageHomeStyled = styled.div``

type Props = {}

export class PageHome extends React.PureComponent<Props> {
  render (): React.Node {
    return (
      <PageHomeStyled>
        <Header />
        <Content />
        <Footer />
      </PageHomeStyled>
    )
  }
}
