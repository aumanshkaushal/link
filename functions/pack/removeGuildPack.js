const { initializeGuild } = require("../initialize/initializeGuild")

async function removeGuildPack(db, guildId, packId) {
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
    let pack = packs.docs.find(doc => doc.id === packId)
    if (!pack) {
        return 
    }
    enabledPacks = enabledPacks.filter(pack => pack !== Number(packId))
    await db.collection('guild').doc(guildId).update({
        enabledPacks: enabledPacks.sort()
    })
}

module.exports  = {
    removeGuildPack
}