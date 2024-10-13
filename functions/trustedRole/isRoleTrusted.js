const { getTrustedRoles } = require('./getTrustedRoles');

async function isRoleTrusted(db, guildID, roleID) {
    let trustedRoles = await getTrustedRoles(db, guildID);
    return trustedRoles.some(x => x === roleID);    
}

module.exports = {
    isRoleTrusted
}