/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
import R from 'ramda'

const enhancedGame = {
  regions() {
    return
  },
  roomArray() {
    return Object.keys(Game.rooms).map(roomName => Game.rooms[roomName])
  },
  roomArrayCount() {
    return Object.keys(Game.rooms).length
  },
  creepArray(regionName) {
    Object.keys(Memory.creeps).filter(creep => Memory.creeps[creep].region === regionName)
  },
  sourceArray(room) {
    return Game.rooms[room].find(FIND_SOURCES).map((source) => {
      return {sourceId: source.id, position: source.pos}
    })
  },
  sourceArrayCount(room) {
    return Game.rooms[room].find(FIND_SOURCES).map((source) => {
      return {sourceId: source.id, position: source.pos}
    }).length
  }
}

export default {
  setup() {
    Object.assign(Game, enhancedGame)
    Memory.regions = []
    console.log(R.add(32, 32))
    return true
  }
}
