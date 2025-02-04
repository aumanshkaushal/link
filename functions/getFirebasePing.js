async function getFirebasePing(db) {
  let start = Date.now()
  await db.collection('bot').doc('health').set({
    ping: start
  })
  let end = Date.now()
  return end - start
}

module.exports = {
    getFirebasePing
}