// @flow
import * as React from 'react'
import { SVGIconStyled } from '../style'

type Props = {
  onClick: () => void
}


export class IconAddRowBelow extends React.PureComponent<Props> {
  render (): React.Node {
    return (
      <SVGIconStyled onClick={this.props.onClick}>
        <image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0iIzc2NzY3NiI+PHBhdGggZD0iTTc4LjA4IDE4aC02MHYzMGg2NlYxOHptMCAyNGgtNTR2LTZoNTR6bTAtMTJoLTU0di02aDU0em0tNjAgMzBoLTZ2MTIuMDRoNDJWNjBoLTM2em00OS0xLjcybDUuMTYgNC44LTEyLjE2LS4wNHY1Ljk0bDEyLjE2LjA0LTUuMTcgNC43OCA0LjM4IDQuMjQgMTIuNjMtMTEuOTktMTIuNjEtMTIuMDEtNC4zOSA0LjI0eiIvPjwvc3ZnPg==" />
      </SVGIconStyled>
    )
  }
}
