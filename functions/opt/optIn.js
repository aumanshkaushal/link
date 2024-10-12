async function optIn(db, userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    await db.collection('user').doc(userId).set({
      optin: true
    })
    return
  }
  let doc = await db.collection('user').doc(userId).get()
  await db.collection('user').doc(userId).update({
    optin: true
  })  
}

module.exports = {
    optIn
}