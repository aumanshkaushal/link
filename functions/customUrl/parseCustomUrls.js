const { getCustomUrls } = require("./getCustomUrls")

async function parseCustomUrls(db, guildId) {
    let customUrls = await getCustomUrls(db, guildId)
    if (customUrls.length === 0) return 'None'
    return customUrls.map(url => `\`${url}\``).join(', ')
}

module.exports  = {
    parseCustomUrls
}