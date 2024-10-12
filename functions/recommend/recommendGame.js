function recommendGame(no_of_players) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  const keys = Object.keys(games)
  const availableGames = keys.filter(key => games[key].range[0] <= no_of_players && games[key].range[1] >= no_of_players)
  const randomIndex = Math.floor(Math.random() * availableGames.length)
  return availableGames[randomIndex]
}

module.exports = {
    recommendGame
}