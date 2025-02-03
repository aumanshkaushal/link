const { getCustomUrls } = require('./getCustomUrls')

async function removeCustomUrl(db, guildId, base64string) {
  let customUrls = await getCustomUrls(db, guildId)
  let url = Buffer.from(base64string, 'base64').toString('ascii')
  let newCustomUrls = customUrls.filter(customUrl => customUrl !== url)
  await db.collection('guild').doc(guildId).update({
    customUrls: newCustomUrls
  })
}

module.exports = {
    removeCustomUrl
}