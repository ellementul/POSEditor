import { Member } from '@ellementul/united-events-environment'

import showUIEvent from './events/showUI_event.js' 

class UIMember extends Member {
  constructor() {
    super()

    this.onEvent(showUIEvent, () => this.callback()) // Subscribing on event
    
    this.role = "UI"
  }

  callback () {
    console.log("showUIEvent!!!!!!!!!!!!!!!!!!!!!!!!!")
    // this.send(yourEvent, {
    //   state: "NewYourStateOfYourEntity" // Fill the state property in the event
    //   // If we don't fill the property, this property will be random.
    // })
  }
}

const exportEvents = { // Export of your events
}

export {
  UIMember
  // exportEvents as events
}