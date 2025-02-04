const { isMatch } = require('./isMatch')
const { initializeGuild } = require('../initialize/initializeGuild')
const { getEnabledPacks } = require('../pack/getEnabledPacks')

async function allowedUrl(db, guildId, url) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await initializeGuild(db, guildId)
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
  }
  let data = guild.data()
  let base_urls = []
  base_urls.push(...data.customUrls)
  let enabled_packs = await getEnabledPacks(db, guildId)
  let packs = await db.collection('pack').get()
  const gameIdSet = new Set();
  for (let i = 0; i < enabled_packs.length; i++) {
    let pack = await packs.docs.find(doc => doc.id == String(enabled_packs[i]))
    let gameIds = (await pack.data()).gameId;
    if (Array.isArray(gameIds)) {
      for (const id of gameIds) {
        gameIdSet.add(id)
      }
    }
  }
  const game_ids = Array.from(gameIdSet);
  let games = await db.collection('info').get()
  for (let i = 0; i < game_ids.length; i++) {
    let game = await games.docs.find(doc => doc.id === String(game_ids[i]))
    base_urls.push(game.data().url)
  }
  let result = false
  for (const base of base_urls) {
    if (isMatch(url, base)) {
      result = true
    }
  }
  return result
}

module.exports = {
  allowedUrl
}
