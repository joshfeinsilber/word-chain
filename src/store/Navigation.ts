import { observable } from "mobx"

export const Screen = {
  join: "join",
  lobby: "lobby",
  game:  "game",
  end: "end"
}

class Navigation {
  @observable public screen: string = Screen.join
}

export default Navigation
