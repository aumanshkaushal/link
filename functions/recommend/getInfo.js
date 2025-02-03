async function getInfo(db, gameId, field) {
  let info = await db.collection('info').get()
  let game = info.docs.find(doc => doc.id === gameId)
  if (!game) {
    return 'None'
  }
  let data = game.data()
  return data[field]
}

module.exports = {
    getInfo
}