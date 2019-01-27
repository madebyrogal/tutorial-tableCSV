// @flow
import * as React from 'react'
import { SVGIconStyled } from '../style'

type Props = {
  onClick: () => void
}


export class IconDeleteColumn extends React.PureComponent<Props> {
  render (): React.Node {
    return (
      <SVGIconStyled onClick={this.props.onClick}>
        <image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0iIzc2NzY3NiI+PHBhdGggZD0iTTcwLjc5IDM1Ljk5bC02LjMtNi4zLTYuMyA2LjMtNC4yLTQuMiA2LjMtNi4zLTYuMy02LjMgNC4yLTQuMiA2LjMgNi4zIDYuMy02LjMgNC4yIDQuMi02LjMgNi4zIDYuMyA2LjMtNC4yIDQuMnptLTE5LjggNmgyNHYzOWgtMjR6TTIxIDcyaDI0VjMwSDIxem02LTEyaDEydjZIMjd6bTAtMjRoMTJ2MThIMjd6Ii8+PC9zdmc+" />
      </SVGIconStyled>
    )
  }
}
