async function removeAllTrustedUsers(db, guildId) {
  await db.collection('guild').doc(guildId).set({
    trustedUsers: []
  }) 
}

module.exports = {
    removeAllTrustedUsers
}