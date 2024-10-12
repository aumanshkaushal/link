async function getTrustedUsers(db, guildId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    return 'None'
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let trustedUsers = data.trustedUsers
  trustedUsers = trustedUsers.map((user) => `<@${user}>`)
  return (trustedUsers.join(', ')==='')? 'None' : trustedUsers.join(', ')
}

module.exports = {
    getTrustedUsers
}