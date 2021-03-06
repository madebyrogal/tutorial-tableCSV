import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from 'store/history'
import { path } from 'config/path'
import { GlobalStyle } from 'asset/style/global'
import { PageHomeContainer } from 'component/page/home/container'

type Props = {}

class App extends React.PureComponent<Props> {
  render(): React.Node {
    return (
        <React.Fragment>
          <GlobalStyle />
          <Router history={history}>
            <Switch>
              <Route exact path={path.home} component={PageHomeContainer} />
            </Switch>
          </Router>
        </React.Fragment>
    )
  }
}

export default App
