import { Member, events } from '@ellementul/united-events-environment'
const { openEvent } = events

import showEvent from './events/show'
class POS extends Member {
  constructor() {
    super()

    this.onEvent(openEvent, () => this.show())
    this.role = "POS"
  }

  show () {
    this.send(showEvent, {
      state: {}
    })
  }
}

const exportEvents = { show: showEvent }

export {
  POS,
  exportEvents as events
}