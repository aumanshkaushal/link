const { initializeUser } = require("../initialize/initializeUser")

async function isOpttedIn(db, userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    await initializeUser(db, userId)
    users = await db.collection('user').get()
    user = users.docs.find(doc => doc.id === userId)
  }
  let doc = await db.collection('user').doc(userId).get()
  let data = doc.data()
  return data.optin
}

module.exports = {
    isOpttedIn
}