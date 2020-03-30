import React from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { observer } from "mobx-react"
import StoreContext from "../../store/StoreContext"
import { AnimatePresence, motion } from "framer-motion"
import TextTransition, { presets } from "react-text-transition"
import styled from "styled-components"

const TimerAndInstructions = observer(() => {
  const { game } = React.useContext(StoreContext)
  const showSpin = game.confirmingWord
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {game.winnerName ? (
        <div
          className="animated tada"
          style={{
            height: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 32,
            animationDuration: "3s"
          }}
        >
          {/* // eslint-disable-next-line */}
          🎉&nbsp;&nbsp;<b>{game.winnerName}</b>&nbsp;wins!&nbsp;&nbsp;🎉
        </div>
      ) : (
        <>
          <AnimatePresence>
            {showSpin && (
              <motion.div
                key="spinner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="loader"
                style={{
                  height: 120,
                  width: 120,
                  position: "absolute",
                  top: 140
                }}
              />
            )}

            {!showSpin && (
              <motion.div
                key="countdown"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ position: "absolute", top: 140 }}
              >
                <CountdownCircleTimer
                  isPlaying={true}
                  key={`countdown-challenge-${game.challengeCount}`}
                  size={120}
                  strokeWidth={9}
                  trailColor={`rgba(0, 0, 0, 0.2)`}
                  strokeLinecap={"square"}
                  durationSeconds={game.secondsPerChallenge}
                  renderTime={(remainingTime: number) => (
                    <span style={{ fontSize: 23, color: "black" }}>
                      {remainingTime}
                    </span>
                  )}
                  colors={[["#000000", 0.33]]}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{ height: 120, width: "100%" }} />
          <TextContainer>
            <TextTransition
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              text={game.challengeText}
              inline={true}
              direction="down"
              springConfig={presets.default}
            />
          </TextContainer>
        </>
      )}
    </div>
  )
})

export default TimerAndInstructions

const TextContainer = styled.div`
  font-size: 27px;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  .text-transition_inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
