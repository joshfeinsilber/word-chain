import React from "react"
import styled from "styled-components"

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

interface PlayerProps {
  name: string
  points: number
  lives: number
  isOutOfGame: boolean
  turnIsActive: boolean
}

const Player = (props: PlayerProps) => {
  const firstLetter = props.name[0].toUpperCase()

  const getEmoji = () => {
    const { lives } = props
    if (lives === 0) {
      return "💀"
    }
    if (lives === 1) {
      return "💔"
    }
    if (lives === 2) {
      return "🧡"
    }
    if (lives === 3) {
      return "❤️"
    }

    return "💖"
  }

  return (
    <Container
      isOutOfGame={props.isOutOfGame}
      turnIsActive={props.turnIsActive}
    >
      <div
        style={{
          fontSize: 32,
          height: 50,
          width: 50,
          fontWeight: 900,
          background: "#37474f",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {firstLetter}
      </div>
      <div
        style={{
          marginLeft: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1
        }}
      >
        <div>
          <div style={{ fontSize: 23, fontWeight: "bold" }}>{props.name}</div>
          <div style={{ fontSize: 12 }}>
            {numberWithCommas(props.points)} points
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          {/* eslint-disable-next-line */}
          <div style={{ fontSize: 25 }}>{getEmoji()}</div>
          {props.lives >= 1 && (
            <div style={{ fontSize: 13, marginTop: -7 }}>{props.lives}</div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Player

const Container = styled.div`
  width: 400px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 11px;
  background: ${(props: { isOutOfGame: boolean; turnIsActive: boolean }) =>
    props.turnIsActive ? "#e8f5e9" : "white"};
  opacity: ${props => (props.isOutOfGame ? 0.7 : 1)};
  transition: background 0.5s;
  transition: opacity 0.4s;
`
