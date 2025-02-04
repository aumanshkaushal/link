const { getEnabledPacks } = require("../pack/getEnabledPacks")

async function parseEnabledPacks(db, guildId) {
    let enabledPacks = await getEnabledPacks(db, guildId)
    let packNames = []
    for (let i = 0; i < enabledPacks.length; i++) {
        let pack = await db.collection('pack').doc(String(enabledPacks[i])).get()
        let data = pack.data()
        let name = data.name
        packNames.push(name)
    }
    if (packNames.length == 0) {
        return 'None'
    }
    return packNames.map(name => `\`${name}\``).join(', ')
}

module.exports  = {
    parseEnabledPacks
}