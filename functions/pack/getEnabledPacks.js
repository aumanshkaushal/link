const { initializeGuild } = require("../initialize/initializeGuild")
const { removeGuildPack } = require("./removeGuildPack")

async function getEnabledPacks(db, guildId) {
    let guilds = await db.collection('guild').get()
    let guild = guilds.docs.find(doc => doc.id === guildId)
    if (!guild) {
      await initializeGuild(db, guildId)
      guilds = await db.collection('guild').get()
      guild = guilds.docs.find(doc => doc.id === guildId)
    }
    let data = guild.data()
    let enabledPacks = data.enabledPacks
    let packs = await db.collection('pack').get()
    let pack;
    for (let i = 0; i < enabledPacks.length; i++) {  
      pack = packs.docs.find(doc => doc.id == enabledPacks[i])
      if (!pack) {
        await removeGuildPack(db, guildId, enabledPacks[i])
      }
    }
    
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
    data = guild.data()
    enabledPacks = data.enabledPacks
    return enabledPacks
}

module.exports  = {
    getEnabledPacks
}