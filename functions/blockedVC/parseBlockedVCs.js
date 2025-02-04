const { getBlockedVCs } = require('./getBlockedVCs');

async function parseBlockedVCs(db, guildId) {
    let blockedVCs = await getBlockedVCs(db, guildId)
    if (blockedVCs.length === 0) return 'None'
    return blockedVCs.map(vc => `<#${vc}>`).join(', ')
}

module.exports = {
    parseBlockedVCs
}