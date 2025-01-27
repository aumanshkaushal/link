const { parseReport } = require('./parseReport')
const { dmInvite } = require('./dmInvite')

async function sendReport(d, hostId, report, inviteReportMessage) {
    inviteReportMessage = inviteReportMessage.replace("%dmsDisabled%", await parseReport(report, 'dmsDisabled'))
    inviteReportMessage = inviteReportMessage.replace("%optedOut%", await parseReport(report, 'optedOut'))
    inviteReportMessage = inviteReportMessage.replace("%successUsers%", await parseReport(report, 'successUsers'))
    await dmInvite(d, hostId, inviteReportMessage)
}

module.exports = {
    sendReport
}