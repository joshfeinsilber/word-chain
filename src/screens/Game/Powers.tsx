import * as React from "react"
import styled from "styled-components"
import Power from "./Power"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"

const Powers = observer(() => {
  const { game } = React.useContext(StoreContext)

  return (
    <Container>
      <Content>
        {game.powers.map(power => (
          <Power key={power.id} power={power} />
        ))}
      </Content>
    </Container>
  )
})

export default Powers

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`
