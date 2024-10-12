async function isOpttedIn(db, userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    return true
  }
  let doc = await db.collection('user').doc(userId).get()
  let data = doc.data()
  return data.optin
}

module.exports = {
    isOpttedIn
}