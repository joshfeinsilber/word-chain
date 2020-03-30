import stores from "../store/stores"

const Send = (action: string, payload?: any) =>
  stores.engine.room.send(action, payload)

export default Send
