import React from "react"
import { observer } from "mobx-react"
import StoreContext from "../../../store/StoreContext"
import Letter, { LETTER_WIDTH, LETTER_MARGIN_RIGHT } from "./Letter"
import { motion } from "framer-motion"
import Highlight from "./Highlight"

export const EXTRA_SPACE_AMOUNT = 32
export const MARGIN_TOP = 40

const LetterLine = observer(() => {
  const { letters } = React.useContext(StoreContext)

  const leftAmount =
    (letters.leftMostLetterIndex * (LETTER_WIDTH + LETTER_MARGIN_RIGHT) -
      EXTRA_SPACE_AMOUNT) *
    -1
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top: MARGIN_TOP,
          display: "flex",
          zIndex: 2,
        }}
        animate={{ left: leftAmount }}
      >
        {letters.letters.map((letter, index) => (
          <Letter
            letter={letter}
            key={`${letter}-${index}`}
            dim={index < letters.letterToHighlightIndex}
          />
        ))}
      </motion.div>
      <Highlight />
    </>
  )
})

export default LetterLine
