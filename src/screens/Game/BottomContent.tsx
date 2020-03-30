import React from "react"
import TimerAndInstructions from "./TimerAndInstructions"
import Players from "./Players"
import Powers from "./Powers"

const BottomContent = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
        fontFamily: "Roboto Slab"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100vh",
          overflow: "auto",
          padding: 15,
          paddingTop: 30,
          width: 446,
          zIndex: 2
        }}
      >
        <Players />
      </div>

      <div style={{ width: `calc(100vw - 446px)` }}>
        <TimerAndInstructions />
        <div
          style={{
            height: "calc(100vh - 309px",
            overflow: "scroll",
            paddingTop: 25,
            paddingBottom: 25,
            boxSizing: "border-box"
          }}
        >
          <Powers />
        </div>
      </div>
    </div>
  )
}

export default BottomContent
