import { observable, IObservableArray, computed } from "mobx"

// const alphabet = ("yeps").split("")

class Letters {
  public letters: IObservableArray<string> = observable.array()
  @computed get leftMostLetterIndex() {
    return Math.max(0, this.letterToHighlightIndex - 1)
  }
  @observable public letterToHighlightIndex: number = 0
}

export default Letters
