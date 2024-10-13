async function removeAllTrustedRoles(db, guildId) {
  await db.collection('guild').doc(guildId).set({
    trustedRoles: []
  }) 
}

module.exports = {
  removeAllTrustedRoles
}