const micromatch = require("micromatch");

function isMatch(url, matchingBase) {
  const normalizedUrl = url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
  return micromatch.isMatch(normalizedUrl, matchingBase);
}

module.exports = {
    isMatch
}
