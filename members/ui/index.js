import { Member, events } from '@ellementul/united-events-environment'
import { Grid } from '@ellementul/ui-game-grid'

import showUIEvent from './events/showUI_event.js' 

class UIMember extends Member {
  constructor() {
    super()

    this.grid = new Grid

    this.onEvent(events.buildEvent, () => this.createUI()) // Subscribing on event
    
    this.role = "UI"
  }

  createUI () {
    this.grid.createBox({
      name: "HelloBlock",
      top: 3,
      left: 3,
      right: 3,
      bottom: 3,
      centred: true
    })
  }
}

const exportEvents = { // Export of your events
}

export {
  UIMember
  // exportEvents as events
}