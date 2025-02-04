async function nameFromPackId(db, packId) {
  let doc = await db.collection('pack').doc(String(packId)).get()
  if (!doc.exists) {
    return ''
  }
  let data = doc.data()
  return data.name
}

module.exports = {
  nameFromPackId
}