const { initializeGuild } = require('../initialize/initializeGuild')

async function removeBlockedVC(db, guildId, voiceId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await initializeGuild(db, guildId)
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let blockedVCs = data.blockedVCs
  let newBlockedVCs = blockedVCs.filter(vc => vc !== voiceId)
  await db.collection('guild').doc(guildId).update({
    blockedVCs: newBlockedVCs
  })
}

module.exports = {
    removeBlockedVC
}