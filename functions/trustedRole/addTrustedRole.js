async function addTrustedRole(db, guildId, roleId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await db.collection('guild').doc(guildId).set({
      trustedRoles: [roleId]
    })
    return
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let trustedRoles = data.trustedRoles
  trustedRoles.push(roleId)
  await db.collection('guild').doc(guildId).update({
    trustedRoles: trustedRoles
  }) 
}

module.exports = {
  addTrustedRole
}