const { initializeGuild } = require('../initialize/initializeGuild')
const { strippedUrl } = require('./strippedUrl')

async function addCustomUrl(db, guildId, customUrl) {
  let url = await strippedUrl(customUrl)
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
  const normalizedUrl = url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
  if (!customUrls.includes(normalizedUrl)) {
    customUrls.push(normalizedUrl)
    await db.collection('guild').doc(guildId).update({
      customUrls: customUrls
    })
  }
}

module.exports = {
    addCustomUrl
}