function getRange(game_id) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  if (games[game_id].range[0] === games[game_id].range[1]) {
    return games[game_id].range[0]
  }
  return games[game_id].range.join('-')
}

module.exports = {
    getRange
}