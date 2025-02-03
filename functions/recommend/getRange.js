const { getGames } = require('../base/getGames')
async function getRange(db, gameId) {
  let info = await db.collection('info').get()
  let game = info.docs.find(doc => doc.id === gameId)
  if (!game) {
    return 'None'
  }
  let data = game.data()
  if (data.range[0] === data.range[1]) {
    return data.range[0]
  }
  return data.range.join('-')
}

module.exports = {
    getRange
}