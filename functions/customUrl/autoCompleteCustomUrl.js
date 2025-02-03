const { initializeGuild } = require('../initialize/initializeGuild')

async function autoCompleteCustomUrl(db, guildId) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await initializeGuild(db, guildId)
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
  }
  let doc = await db.collection('guild').doc(guildId).get()
  let data = doc.data()
  let customUrls = data.customUrls
  return JSON.stringify(customUrls.map(url => {
    return {
      name: url,
      value: Buffer.from(url).toString('base64')
    }
  }))
}

module.exports = {
    autoCompleteCustomUrl
}