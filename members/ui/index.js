import { Member, events } from '@ellementul/united-events-environment'
import { Grid } from '@ellementul/ui-game-grid'

import { events as PosEvents } from '@ellementul/pos-member'
const { changed } = PosEvents

class UIMember extends Member {
  constructor() {
    super()

    this.grid = new Grid

    this.onEvent(events.buildEvent, () => this.createUI())
    this.onEvent(changed, msg => this.renederPoints(msg))
    
    this.role = "UI"
  }

  createUI () {
    this.grid.createBox({
      name: "HelloBlock",
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      centred: true
    })
    this.send(changed, {
      removed: [],
      state: [{
        uuid: "3ee3a23f-3fd6-46d3-96b2-2f7faaafcc42",
        userdata: {
          title: "Захватить Мир!",
          desc: "Если захват Мира возможен, то он необходим! Захват Мира может быть только мирным, потому это же Мир!"
        },
        linesAbove: [],
        linesBelow: [],
        roots: [],
        leaves: []
      }]
    })
  }

  renederPoints({ state: points }) {
    console.log(points)
  }
}

const exportEvents = { // Export of your events
}

export {
  UIMember
  // exportEvents as events
}