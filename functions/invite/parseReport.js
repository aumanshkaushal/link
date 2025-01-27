async function parseReport(report, option) {
  let workspace = report[option]
  if (workspace.length==0) {
    return 'None'
  }
  let result = ''
  for (let j = 0; j < workspace.length; j++) {
    if (j == workspace.length - 1) {
      result += '<@' + workspace[j] + '>'
    }
    else {
      result += '<@' + workspace[j] + '>, '
    }
  }
  return result
}

module.exports = {
    parseReport
}