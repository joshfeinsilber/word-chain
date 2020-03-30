import stores from "../store/stores"
import { Room } from "blueboat-client"
import { Screen } from "../store/Navigation"
import { Howl } from "howler"

export const createGame = (name: string) => {
  const room = stores.engine.client.createRoom("WordChain", { name })
  room.onJoin.add(() => {
    stores.engine.room = room
    onRoom(room)
  })
}

export const joinGame = (roomId: string, name: string) => {
  const room = stores.engine.client.joinRoom(roomId, { name })
  room.onJoin.add(() => {
    stores.engine.room = room
    onRoom(room)
  })
}

const onRoom = (room: Room) => {
  stores.navigation.screen = Screen.lobby
  room.onMessage.add((key: string, payload: any) => {
    if (key === "PLAYERS") {
      stores.players.players.replace(payload)
    }
    if (key === "GAME_STAGE") {
      stores.navigation.screen = payload
      return
    }
    if (key === "ADDED_LETTER") {
      stores.letters.letters.push(payload)
      return
    }
    if (key === "REMOVED_LETTER") {
      stores.letters.letters.pop()
      return
    }
    if (key === "HIGHLIGHTED_LETTER_INDEX") {
      stores.letters.letterToHighlightIndex = payload
      return
    }
    if (key === "LETTERS") {
      stores.letters.letters.replace(payload)
      return
    }
    if (key === "CHALLENGE_TEXT") {
      stores.game.challengeText = payload
      stores.game.challengeCount += 1
      return
    }
    if (key === "SECONDS_PER_CHALLENGE") {
      stores.game.secondsPerChallenge = payload
      return
    }
    if (key === "CONFIRMING_WORD") {
      stores.game.confirmingWord = payload
      return
    }
    if (key === "PLAY_SOUND") {
      let soundName = ""
      if (payload === "CORRECT_ANSWER") {
        soundName = "correct.wav"
      }
      if (payload === "INCORRECT_ANSWER") {
        soundName = "incorrect.wav"
      }
      if (payload === "OUT_OF_GAME") {
        soundName = "left.wav"
      }
      if (payload === "FANFARE") {
        soundName = "celebrate.mp3"
      }

      if (soundName) {
        const sound = new Howl({ src: soundName })
        sound.play()
      }

      return
    }
    if (key === "WINNER_NAME") {
      stores.game.winnerName = payload
      return
    }
    if (key === "POWERS") {
      stores.game.powers.replace(payload)
      return
    }
  })
}
