const { initializeGuild } = require("../initialize/initializeGuild")

async function removeTrustedRole(db, guildId, roleId) {
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
  trustedRoles = trustedRoles.filter(role => role !== roleId)
  await db.collection('guild').doc(guildId).update({
    trustedRoles: trustedRoles
  }) 
}

module.exports = {
  removeTrustedRole
}