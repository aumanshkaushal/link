const { humansInVoiceChannel } = require('./humansInVoiceChannel')
const { validateHumans } = require('./validateHumans')
const { dmManager } = require('./dmManager')

async function sendInvite(db, d, voiceId, hostId, message) {
    let humans = await humansInVoiceChannel(d, voiceId)
    let validatedHumans = await validateHumans(db, humans)
    let userIds = validatedHumans.filter((user) => {
        return user != hostId
    })
    let dmsDisabled = await dmManager(d, userIds, message, 5, 1000)
    let optedOut = humans.filter((user) => !validatedHumans.includes(user))
    let successUsers = userIds.filter((user) => !dmsDisabled.includes(user))
    return {
        dmsDisabled,
        optedOut,
        successUsers
    }

}

module.exports = {
    sendInvite
}