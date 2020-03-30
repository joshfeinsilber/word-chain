import Navigation from './Navigation'
import Letters from './Letters'
import Engine from './Engine'
import Players from './Players'
import Game from './Game'

const stores = {
  navigation: new Navigation(),
  letters: new Letters(),
  players: new Players(),
  engine: new Engine(),
  game: new Game(),
}

export default stores