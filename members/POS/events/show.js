import { EventFactory, Types } from '@ellementul/united-events-environment'

const type = Types.Object.Def({
  system: "POS",
  entity: "State of POS"
}, true)

export default EventFactory(type)