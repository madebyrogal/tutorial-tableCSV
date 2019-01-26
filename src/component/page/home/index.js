// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Header } from 'component/layout/header'
import { Content } from 'component/layout/content'
import { Footer } from 'component/layout/footer'
import { Table } from '../../layout/table'
import type { ModelTable } from '../../../model/table'

const PageHomeStyled = styled.div``

type Props = {
  data: ModelTable,
}

export class PageHome extends React.PureComponent<Props> {
  render (): React.Node {
    const { data } = this.props
    
    return (
      <PageHomeStyled>
        <Header />
        <Content>
          <Table data={data} />
        </Content>
        <Footer />
      </PageHomeStyled>
    )
  }
}
