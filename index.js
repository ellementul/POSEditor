import { UnitedEventsEnv, Room } from '@ellementul/united-events-environment'
import { Logging } from './logging'

import { POSMember } from '@ellementul/pos-member'
import { UIMember } from './members/ui/index.js'

const room = new Room
room.addMember(POSMember)
room.addMember(UIMember)

const env = new UnitedEventsEnv(room)
env.baseUrl = "./"

env.setupLogging({
    logging: Logging()
})
env.build()
env.run()