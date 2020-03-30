import { observable, IObservableArray } from "mobx"

export interface Power {
  id: string
  emoji: string
  background: string
  name: string
  description: string
  cost: number
}

class Game {
  @observable public challengeText: string = ""
  @observable public challengeCount: number = 0
  @observable public secondsPerChallenge: number = 15
  @observable public confirmingWord: boolean = false
  @observable public winnerName: string = ""
  public powers: IObservableArray<Power> = observable.array()
}

export default Game