function getInfo(game_id, field) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  return games[game_id][field]
}

module.exports = {
    getInfo
}