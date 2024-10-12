
const admin = require('firebase-admin')

const credentials = require('./secret/key.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials),
})
const db = admin.firestore();


// async function getTrustedUsers(guildId) {
//   let guilds = await db.collection('guild').get()

//   let guild = guilds.docs.find(doc => doc.id === guildId)
//   if (!guild) {
//     return ''
//   }
//   let doc = await db.collection('guild').doc(guildId).get()
//   let data = doc.data()
//   let trustedUsers = data.trustedUsers
//   trustedUsers = trustedUsers.map((user) => `<@${user}>`)
//   return trustedUsers.join(', ')

// }

// getTrustedUsers('5259506170556580042').then(console.log)

// async function addTrustedUsers(guildId, userId) {
//   let guilds = await db.collection('guild').get()
//   let guild = guilds.docs.find(doc => doc.id === guildId)
//   if (!guild) {
//     await db.collection('guild').doc(guildId).set({
//       trustedUsers: [userId]
//     })
//     return
//   }
//   let doc = await db.collection('guild').doc(guildId).get()
//   let data = doc.data()
//   let trustedUsers = data.trustedUsers
//   trustedUsers.push(userId)
//   await db.collection('guild').doc(guildId).update({
//     trustedUsers: trustedUsers
//   }) 
// }

// addTrustedUsers('52595061705565800422', '1234567890')

// async function removeTrustedUsers(guildId, userId) {
//   let guilds = await db.collection('guild').get()
//   console.log(guilds.docs.find(doc => doc.id === guildId))
//   let guild = guilds.docs.find(doc => doc.id === guildId)
//   if (!guild) {
//     return
//   }
//   let doc = await db.collection('guild').doc(guildId).get()
//   let data = doc.data()
//   let trustedUsers = data.trustedUsers
//   trustedUsers = trustedUsers.filter(user => user !== userId)
//   await db.collection('guild').doc(guildId).update({
//     trustedUsers: trustedUsers
//   }) 
// }

// removeTrustedUsers('1247578096282894467', '1234567890')

// async function removeAllTrustedUsers(guildId) {
//   await db.collection('guild').doc(guildId).set({
//     trustedUsers: []
//   }) 
// }

// removeAllTrustedUsers('525950617055658004')

// async function isOpttedIn(userId) {
//   let users = await db.collection('user').get()
//   let user = users.docs.find(doc => doc.id === userId)
//   if (!user) {
//     return false
//   }
//   let doc = await db.collection('user').doc(userId).get()
//   let data = doc.data()
//   return data.optin
// }

// isOpttedIn('428191892950220800').then(console.log)

async function optIn(userId) {
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

optIn('428191892950220800')

async function optOut(userId) {
  let users = await db.collection('user').get()
  let user = users.docs.find(doc => doc.id === userId)
  if (!user) {
    await db.collection('user').doc(userId).set({
      optin: false
    })
    return
  }
  let doc = await db.collection('user').doc(userId).get()
  await db.collection('user').doc(userId).update({
    optin: false
  })    
}

// optOut('428191892950220800')