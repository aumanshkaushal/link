async function addTrustedUsers(db, guildId, userId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await db.collection('guild').doc(guildId).set({
      trustedUsers: [userId]
    })
    return
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let trustedUsers = data.trustedUsers
  trustedUsers.push(userId)
  await db.collection('guild').doc(guildId).update({
    trustedUsers: trustedUsers
  }) 
}

module.exports = {
    addTrustedUsers
}