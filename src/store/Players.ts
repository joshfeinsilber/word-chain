import { observable, IObservableArray, computed } from "mobx"

export interface Player {
  id: string
  name: string
  points: number
  pointsPerLetter: number
  pointsFromOthers: number
  pointsGainedPerInterval20: number
  powerPriceMultiplier: number
  livesLeft: number
  outOfGame: boolean
  turnIsActive: boolean
}

class Players {
  @observable public playerId: string = ""
  public players: IObservableArray<Player> = observable.array()
  @computed get me() {
    return this.players.find(p => p.id === this.playerId)
  }
}

export default Players
