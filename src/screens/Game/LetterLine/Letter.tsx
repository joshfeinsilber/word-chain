import React from "react"

export const LETTER_WIDTH = 60
export const LETTER_HEIGHT = 60
export const LETTER_MARGIN_RIGHT = 4

const Letter = (props: { letter: string, dim: boolean }) => {
  return (
    <div
      style={{
        width: LETTER_WIDTH,
        height: LETTER_HEIGHT,
        marginRight: LETTER_MARGIN_RIGHT,
        fontFamily: "Courier Prime",
        textAlign: "center",
        fontSize: 42,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: props.dim ? 0.6 : 1
      }}
    >
      {props.letter}
    </div>
  )
}

export default Letter
