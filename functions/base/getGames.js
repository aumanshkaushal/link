async function getGames(db) {
  let info = await db.collection('info').get()
  let arr = info.docs.map(doc => [doc.id, doc.data()])
  arr = arr.filter((subarr) => subarr[0]!='00000')
  let obj = new Object()
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i][0]
    let game = arr[i][1]
    obj[name] = game
  }
  return obj
}

module.exports = {
  getGames
}