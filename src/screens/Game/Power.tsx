import * as React from "react"
import styled from "styled-components"
import { Button } from "antd"
import { Power as PowerType } from "../../store/Game"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"

const Power = observer((props: { power: PowerType }) => {
  const {
    players: { me },
    engine
  } = React.useContext(StoreContext)
  const [loading, setLoading] = React.useState(false)
  const { power } = props

  const purchase = () => {
    engine.room.send("PURCHASE_POWER", power.id)
    setLoading(true)
    setTimeout(() => setLoading(false), 700)
  }

  const cost = Math.round(power.cost * (me?.powerPriceMultiplier || 1))

  return (
    <Container>
      {/* // eslint-disable-next-line */}
      <Top>{power.emoji}</Top>
      <Content>
        <div style={{ fontWeight: "bold", fontSize: 18 }}>{power.name}</div>
        <div
          style={{
            opacity: 0.8,
            fontSize: 12,
            marginTop: -3,
            lineHeight: "14px",
            paddingLeft: 5,
            paddingRight: 5
          }}
        >
          {power.description}
        </div>
        <Button
          type="primary"
          size="small"
          onClick={purchase}
          block={true}
          style={{ marginTop: 5 }}
          disabled={(me?.points || 0) < cost}
          loading={loading}
        >
          {cost} points
        </Button>
      </Content>
    </Container>
  )
})

export default Power

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  margin: 10px;
  border-radius: 6px;
  width: 212px;
  height: 152px;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  background: black;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 52px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
`
