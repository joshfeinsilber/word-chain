import React from "react"
import { Button } from "antd"
import styled from "styled-components"
import Players from "../Game/Players"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"
import Send from "../../util/Send"

const Lobby = () => {
  return <App />
}

const App = observer(() => {
  const { engine } = React.useContext(StoreContext)

  const startGame = () => {
    Send("START_GAME")
  }

  return (
    <Container>
      <Content>
        <Title>
          word<b>chain</b>
        </Title>

        <RoomCode>
          Join with code: <b>{engine.room.id}</b>
        </RoomCode>
        <Button
          onClick={startGame}
          style={{ marginTop: 20, marginBottom: -20 }}
          size="large"
          block={true}
          type="dashed"
        >
          Start Game
        </Button>
        <div style={{ height: 50 }} />
        <Players />
      </Content>
    </Container>
  )
})

export default Lobby

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

const RoomCode = styled.div`
  font-size: 21px;
  margin-top: 20px;
  text-align: center;
`
