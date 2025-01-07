const { initializeGuild } = require("../initialize/initializeGuild")

async function getTrustedRoles(db, guildId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await initializeGuild(db, guildId)
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let trustedRoles = data.trustedRoles
  if (!trustedRoles) {
    return 'None'
  }
  return trustedRoles
}

module.exports = {
  getTrustedRoles
}