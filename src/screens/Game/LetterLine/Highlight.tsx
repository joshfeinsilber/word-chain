import React from "react"
import { observer } from "mobx-react"
import StoreContext from "../../../store/StoreContext"
import { LETTER_WIDTH, LETTER_HEIGHT, LETTER_MARGIN_RIGHT } from "./Letter"
import { MARGIN_TOP, EXTRA_SPACE_AMOUNT } from "./App"
import { motion } from "framer-motion"

const Highlight = observer(() => {
  const { letters } = React.useContext(StoreContext)

  if (letters.letterToHighlightIndex < letters.leftMostLetterIndex) {
    return null
  }

  const lettersAfterLeftmostLetter = letters.letters.filter(
    (letter, index) => index >= letters.leftMostLetterIndex
  )

  const lettersTrimmed =
    letters.letters.length - lettersAfterLeftmostLetter.length

  let leftValue = 0
  lettersAfterLeftmostLetter.forEach((letter, index) => {
    if (index < letters.letterToHighlightIndex - lettersTrimmed) {
      leftValue += LETTER_WIDTH + LETTER_MARGIN_RIGHT
    }
  })

  leftValue += EXTRA_SPACE_AMOUNT

  return (
    <motion.div
      style={{
        height: LETTER_HEIGHT,
        width: LETTER_WIDTH,
        top: MARGIN_TOP,
        position: "absolute",
        background: "yellow",
        opacity: 0.6,
        borderRadius: "50%",
        zIndex: 1
      }}
      animate={{ left: leftValue }}
    />
  )
})

export default Highlight
