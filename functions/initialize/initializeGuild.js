async function initializeGuild(db, guildId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await db.collection('guild').doc(guildId).set({
      trustedRoles: [],
      enabledPacks: [96000, 96001, 96002, 96003],
      customUrls: [],
      blockedVCs: [],
      maxLimit: 15,
    })
  }
}

module.exports = {
    initializeGuild
}