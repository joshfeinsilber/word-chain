import {Client} from 'blueboat-client'
import stores from '../store/stores'

const InitClient = () => {
  const client = new Client("http://192.168.86.246:4000")
  client.onConnect.add(() => {
    stores.engine.client = client
    stores.players.playerId = client.id
  })
}

export default InitClient