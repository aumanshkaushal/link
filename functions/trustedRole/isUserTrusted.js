const { getTrustedRoles } = require('./getTrustedRoles');

async function isUserTrusted(d, db, guildID, userID) {

    let trustedRoles = await getTrustedRoles(db, guildID);
    
    const data = d.util.aoiFunc(d);
    if (data.err) return d.error(data.err);

    const guild = await d.util.getGuild(d, guildID);
    if (!guild) return d.aoiError.fnError(d, "guild", {inside: data.inside});

    const member = await d.util.getMember(guild, userID);
    if (!member) {
        return false;
    } else {
        const memRoles = member.roles.cache
        return trustedRoles.some(x => memRoles.has(x) || memRoles.find(y => y.name.toLowerCase() === x));
    }
}

module.exports = {
    isUserTrusted
}