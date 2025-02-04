async function parseReport(report, option) {
  let workspace = report[option]
  if (workspace.length == 0) {
    return 'None'
  }
  return workspace.map(id => `<@${id}>`).join(', ')
}

module.exports = {
    parseReport
}