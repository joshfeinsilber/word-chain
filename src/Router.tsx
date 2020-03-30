import React from "react"
import { observer } from "mobx-react"
import { Screen } from "./store/Navigation"
import StoreContext from "./store/StoreContext"

import Game from "./screens/Game/App"
import Join from "./screens/Join/App"
import Lobby from "./screens/Lobby/App"

const routes = [
  {
    path: Screen.game,
    component: Game
  },
  {
    path: Screen.join,
    component: Join
  },
  {
    path: Screen.lobby,
    component: Lobby
  }
]

const UIRoute = (props: {
  currentPath: string
  path: string
  component: () => JSX.Element
}) => {
  if (props.currentPath === props.path) {
    return props.component()
  }
  return null
}

const Router = observer(() => {
  const { navigation } = React.useContext(StoreContext)

  return (
    <>
      {routes.map(route => {
        return (
          <UIRoute
            key={route.path}
            path={route.path}
            currentPath={navigation.screen}
            component={route.component}
          />
        )
      })}
    </>
  )
})

export default Router
