const { getEnabledPacks } = require('./getEnabledPacks')

async function autoCompleteRemovePacks(db, guildId) {
  let enabled_packs = await getEnabledPacks(db, guildId)
  let result = []
  for (let pack of enabled_packs) {
    let doc = await db.collection('pack').doc(String(pack)).get()
    let data = doc.data()
    result.push({
      name: data.name,
      value: String(pack)
    })
  }
  return JSON.stringify(result)
}

module.exports = {
    autoCompleteRemovePacks
}