const { UnitedEventsEnv, Room } = require('@ellementul/united-events-environment')
const { Logging } = require('./logging')

const { Ticker } = require('@ellementul/uee-timeticker')
const { POS } = require('./members/POS')

const room = new Room
room.addMember(Ticker)
room.addMember(POS)

const env = new UnitedEventsEnv(room)
env.baseUrl = "./"

env.setupLogging({
    logging: Logging()
})
env.build()
env.run()