import React from "react"
import Player from "./Player"
import { Player as PlayerType } from "../../store/Players"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"

const Players = observer(() => {
  const { players, engine } = React.useContext(StoreContext)

  let firstPlayers: PlayerType[] = []
  let lastPlayers: PlayerType[] = []
  let currentPlayer: PlayerType = null as any

  players.players.forEach(p => {
    if (p.id === engine.client.id) {
      currentPlayer = p
      return
    }
    if (currentPlayer) {
      firstPlayers.push(p)
    } else {
      lastPlayers.push(p)
    }
  })

  if (!currentPlayer) {
    return null
  }

  const sortedPlayers = [currentPlayer, ...lastPlayers, ...firstPlayers]

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
      }}
    >
      {sortedPlayers.map(player => (
        <Player
          key={player.id}
          points={player.points}
          lives={player.livesLeft}
          name={player.name}
          isOutOfGame={player.outOfGame}
          turnIsActive={player.turnIsActive}
        />
      ))}
    </div>
  )
})

export default Players
