const { getEnabledPacks } = require("../pack/getEnabledPacks")

async function parseEnabledPacks(db, guildId) {
    let packs = await db.collection('pack').get()
    let enabledPacks = await getEnabledPacks(db, guildId)
    let pack, data, name;
    let packNames = []
    for (let i = 0; i < enabledPacks.length; i++) {
      pack = packs.docs.find(doc => doc.id == enabledPacks[i])
      if (pack) {
        data = pack.data()
        name = data.name
        packNames.push(name)
      }
    }
    result = ''
    for (let j = 0; j < packNames.length; j++) {
      if (j == packNames.length - 1) {
        result += '`' + packNames[j] + '`'
      }
      else {
        result += '`' + packNames[j] + '`, '
      }
    }
    if (result == '') {
      result = 'None'
    }
    return result
}

module.exports  = {
    parseEnabledPacks
}