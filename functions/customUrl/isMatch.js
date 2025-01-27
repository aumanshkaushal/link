const micromatch = require("micromatch");

function isMatch(url, matchingBase) {
  const normalizedUrl = url.replace(/^(https?:\/\/)?(www\.)?/, "");
  return micromatch.isMatch(normalizedUrl, matchingBase);
}

module.exports = {
    isMatch
}
