const { getEnabledPacks } = require('./getEnabledPacks')

async function autoCompleteAvailablePacks(db, guildId) {
  let enabled_packs = await getEnabledPacks(db, guildId)
  let packs = await db.collection('pack').get()
  let all_packs = await packs.docs.map(doc => doc.id)
  let available_packs = []
  for (let pack of all_packs) {
    if (!enabled_packs.includes(Number(pack))) {
      available_packs.push(pack)
    }
  }
  let result = []
  for (let pack of available_packs) {
    let doc = await db.collection('pack').doc(pack).get()
    let data = doc.data()
    result.push({
      name: data.name,
      value: pack
    })
  }
  return JSON.stringify(result)
}

module.exports = {
    autoCompleteAvailablePacks
}