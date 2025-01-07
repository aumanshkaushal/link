const { initializeGuild } = require("../initialize/initializeGuild")

async function getCustomUrls(db, guildId) {    
    let guilds = await db.collection('guild').get()
    let guild = guilds.docs.find(doc => doc.id === guildId)
    if (!guild) {
        await initializeGuild(db, guildId)
        guilds = await db.collection('guild').get()
        guild = guilds.docs.find(doc => doc.id === guildId)
    }
    let data = guild.data()
    let customUrls = data.customUrls
    return customUrls
}

module.exports  = {
    getCustomUrls
}