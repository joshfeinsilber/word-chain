import React from "react"
import { Divider, Input, Button } from "antd"
import styled from "styled-components"
import { createGame, joinGame } from "../../util/GameRoomHandler"
import InitClient from "../../util/InitClient"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"

const Join = () => <App />

const App = observer(() => {
  const [name, setName] = React.useState("")
  const [gameCode, setGameCode] = React.useState("")

  const { engine } = React.useContext(StoreContext)

  React.useEffect(() => {
    InitClient()
  }, [])

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onGameCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameCode(e.target.value)
  }

  const createNewGame = () => {
    createGame(name)
  }

  const joinExistingGame = () => {
    joinGame(gameCode, name)
  }

  return (
    <Container>
      <Content>
        <Title>
          word<b>chain</b>
        </Title>
        <Divider />
        <FullWidth>
          <div>Enter your name...</div>
          <Input
            onChange={onNameChange}
            value={name}
            size="large"
            placeholder="Finn the Rat"
          />
        </FullWidth>
        {name && engine.client && engine.client.id && (
          <>
            <Divider />
            <Button block type="dashed" onClick={createNewGame}>
              Create Game
            </Button>
            <Divider>or...</Divider>
            <FullWidth>
              <div>Join a game...</div>
              <Input
                size="large"
                value={gameCode}
                onChange={onGameCodeChange}
                placeholder="Game code"
              />
              <Button
                disabled={!gameCode}
                style={{ marginTop: 5 }}
                block
                type="dashed"
                onClick={joinExistingGame}
              >
                Join Game
              </Button>
            </FullWidth>
          </>
        )}
      </Content>
    </Container>
  )
})

export default Join

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 90%;
  max-width: 450px;
  font-family: Roboto Slab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const Title = styled.div`
  font-size: 45px;
`

const FullWidth = styled.div`
  width: 100%;
`
