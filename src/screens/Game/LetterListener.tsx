import React from "react"
import Send from "../../util/Send"

const LetterListener = () => {
  React.useEffect(() => {
    document.body.addEventListener("keydown", event => {
      const key = event.key
      if (key === "Enter") {
        Send("KEY", {
          action: "confirm"
        })
        return
      }
      if (key === "Backspace") {
        Send("KEY", {
          action: "remove"
        })

        return
      }
      if (key === "" || key === " ") {
        return
      }
      if (key.length > 1) {
        return
      }
      Send("KEY", {
        action: "add",
        value: key
      })
    })
    // eslint-disable-next-line
  }, [])

  return null
}

export default LetterListener
