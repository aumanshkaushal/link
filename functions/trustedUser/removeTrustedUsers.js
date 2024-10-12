async function removeTrustedUsers(db, guildId, userId) {
  let guilds = await db.collection('guild').get()

  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    return
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let trustedUsers = data.trustedUsers
  trustedUsers = trustedUsers.filter(user => user !== userId)
  await db.collection('guild').doc(guildId).update({
    trustedUsers: trustedUsers
  }) 
}

module.exports = {
    removeTrustedUsers
}