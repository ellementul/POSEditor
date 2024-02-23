const { UnitedEventsEnv, Room } = require('@ellementul/united-events-environment')
const { Logging } = require('./logging')

const room = new Room

const env = new UnitedEventsEnv(room)
env.baseUrl = "./"

env.setupLogging({
    logging: Logging()
})
env.build()