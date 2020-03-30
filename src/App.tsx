import React from "react"
import StoreContext from "./store/StoreContext"
import stores from "./store/stores"
import Router from "./Router"

const App = () => {
  return (
    <StoreContext.Provider value={stores}>
      <Router />
    </StoreContext.Provider>
  )
}

export default App
