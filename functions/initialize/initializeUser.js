async function initializeUser(db, userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    await db.collection('user').doc(userId).set({
      blacklisted: false,
      optin: true
    })
  }
}

module.exports = {
    initializeUser
}