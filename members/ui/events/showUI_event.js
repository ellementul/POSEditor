import { EventFactory, Types } from '@ellementul/united-events-environment'
const type = Types.Object.Def({
  system: "UserInterface",
  entity: "UI",
  action: "Show"
}) 
export default EventFactory(type)