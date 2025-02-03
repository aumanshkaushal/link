const { initializeUser } = require("../initialize/initializeUser")

async function optIn(db, userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    await initializeUser(db, userId)
    users = await db.collection('user').get()
    user = users.docs.find(doc => doc.id === userId)
  }
  await db.collection('user').doc(userId).update({
    optin: true
  })  
}

module.exports = {
    optIn
}