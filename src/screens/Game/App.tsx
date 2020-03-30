import React from "react"
import styled from "styled-components"
import LetterLine from "./LetterLine/App"
import LetterListener from "./LetterListener"
import BottomContent from "./BottomContent"

const App = () => {
  return (
    <Container>
      <LetterLine />
      <div style={{ height: 139 }} />
      <BottomContent />
      <LetterListener />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  color: black;
  overflow: hidden;
`
