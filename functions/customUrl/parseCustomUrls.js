const { getCustomUrls } = require("./getCustomUrls")

async function parseCustomUrls(db, guildId) {
    let customUrls = await getCustomUrls(db, guildId)
    let result = ''
    for (let j = 0; j < customUrls.length; j++) {
      if (j == customUrls.length - 1) {
        result += '`' + customUrls[j] + '`'
      }
      else {
        result += '`' + customUrls[j] + '`, '
      }
    }
    return (result=='')? 'None' : result
}

module.exports  = {
    parseCustomUrls
}